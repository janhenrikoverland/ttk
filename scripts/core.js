if (!('TTK' in window)) {
	TTK = {};
}

TTK.config = {};
TTK.update = {};

TTK.core = {};

TTK.core.getInstance = function() {
	var util = {};

	util.number = {};
	util.array = {};
    util.date = {};

	// util
	util.number.difference = function(a, b) {
		return Math.abs(a - b);
	};

	util.array.indexOf = function(array, item, from) {
		if ('indexOf' in Array.prototype) {
			return array.indexOf(item, from);
		}

		var i,
			len = array.length;

		for (i = (from < 0) ? Math.max(0, len + from) : from || 0; i < len; i++) {
			if (array[i] === item) {
				return i;
			}
		}

		return -1;
	};

	util.array.sortObjectArrayByNumber = function(array, sortObjects) {
		if (!sortObjects) {
			return;
		}

		var compare = function(a, b) {
            for (var i = 0, key, direction; i < sortObjects.length; i++) {
                key = sortObjects[i].key;
                direction = sortObjects[i].direction;

                if (a[key] < b[key]) {
                    return direction === 'DESC' ? 1 : -1;
                }
                if (a[key] > b[key]) {
                    return direction === 'DESC' ? -1 : 1;
                }
            }

			return 0;
		};

		array.sort(compare);

        return array;
	};

    util.date.iso2pp = function(iso) {
        if (!iso) {
            return '';
        }

        var date = new Date(iso),
            now = new Date(),
            dateFY = date.getFullYear(),
            dateM = date.getMonth(),
            dateD = date.getDate(),
            nowFY = now.getFullYear(),
            nowM = now.getMonth(),
            nowD = now.getDate(),
            getPfxd = function(param) {
                return parseInt(param) < 10 ? '0' + param : param;
            },
            time = getPfxd(date.getHours()) + ':' + getPfxd(date.getMinutes());

        if (dateFY === nowFY && dateM === nowM && nowD === dateD) {
            return 'I dag, ' + time;
        }
        else if (dateFY === nowFY && dateM === nowM && (nowD - dateD === 1)) {
            return 'I går, ' + time;
        }

    return getPfxd(dateD) + '/' + getPfxd(dateM) + '/' + dateFY + ', ' + time;
    };

	return {
		util: util
	};
};

TTK.core.extendConfig = function(config) {

    // validate team ids
    (function() {
        var teams = config.teams,
            ids = Ext.Array.pluck(teams, 'id'),
            players = config.players;

        for (var i = 0, table; i < players.length; i++) {
            table = players[i].table;

            for (var j = 0, teamId; j < table.length; j++) {
                teamId = table[j];

                if (!Ext.Array.contains(ids, teamId)) {
                    alert('Invalid team id: ' + teamId + ' (' + players[i].name + ')');
                }
            }
        }
    }());

	// team id map
	config.teamIdTeamMap = function() {
        var teams = config.teams,
            map = {};

        for (var i = 0, team; i < teams.length; i++) {
            team = teams[i];
			map[team.id] = team;
		}

		return map;
	}();

    // team name map
    config.teamFullNameTeamMap = function() {
        var teams = config.teams,
            map = {};

        for (var i = 0, team; i < teams.length; i++) {
            team = teams[i];
            map[team.fullName] = team;
        }

        return map;
    }();

    // place font size
    config.placeFontSize = function() {
        var players = config.players,
            defaultFontSize = '1em',
            sizes;

        if (!config.placeFontSize.length) {
            sizes = [];

            for (var i = 0; i < players.length; i++) {
                sizes.push(defaultFontSize);
            }
        }

        return sizes || config.placeFontSize;
    }();

	// diff color array
	config.colorArray = function() {
		var a = [config.teamColors[0]];

		for (var i = 1; i < config.teamColors.length; i++) {
			for (var j = 0; j < config.intervalSize; j++) {
				a.push(config.teamColors[i]);
			}
		}

		return a;
	}();

	return config;
};

TTK.core.applyUpdate = function(ttk, update) {
	var players = ttk.config.players;

    if (update.iktsScores) {
        for (var i = 0, player; i < players.length; i++) {
            player = players[i];
            player.iktsScore = update.iktsScores[player.id];
        }
    }

	ttk.update = update;
};

TTK.core.extendPlayers = function(ttk) {
	var config = ttk.config,
		players = config.players,
		standing = ttk.update.standing;

	// extend players
	for (var i = 0, player, score, index; i < players.length; i++) {
		player = players[i];
		player.teamScores = [];
		player.teamColors = [];
		player.plScore = 0;
        player.plHits = 0;
        player.plMax = 0;

		for (var j = 0, team, diff, score; j < player.table.length; j++) {
			team = player.table[j];

			diff = ttk.util.number.difference(j, ttk.util.array.indexOf(standing, team));

			score = config.scoreArray[diff];

			player.teamScores.push(score);
			player.teamColors.push(config.colorArray[diff]);
			player.plScore += score;
            player.plHits = (score === -1) ? (player.plHits + 1) : player.plHits;
            player.plMax = (score > player.plMax) ? score : player.plMax;
		}
	}

	//// ikts places
	//ttk.util.array.sortObjectArrayByNumber(players, [{key: 'iktsScore', direction: 'DESC'}]);

    //for (var i = 0, player; i < players.length; i++) {
        //player = players[i];

        //if (i === 0) {
            //players[i].iktsPlace = 1;
        //}
        //else {
            //if (player.iktsScore === players[i-1].iktsScore) {
                //player.iktsPlace = players[i-1].iktsPlace;
            //}
            //else {
                //player.iktsPlace = i + 1;
            //}
        //}
    //}

    // table places
	ttk.util.array.sortObjectArrayByNumber(players, [{key: 'plScore', direction: 'ASC'}, {key: 'plMax', direction: 'ASC'}, {key: 'plHits', direction: 'DESC'}]);

    for (var i = 0, player; i < players.length; i++) {
        players[i].plPlace = i + 1;
        //player = players[i];

        //if (i === 0) {
            //players[i].plPlace = 1;
        //}
        //else {
            //if (player.plScore === players[i-1].plScore) {
                //player.plPlace = players[i-1].plPlace;
            //}
            //else {
                //player.plPlace = i + 1;
            //}
        //}
    }

	// places
	for (var i = 0, player; i < players.length; i++) {
		//players[i].place = players[i].iktsPlace + players[i].plPlace;
		players[i].place = players[i].plPlace;
	}

	// position
    //ttk.util.array.sortObjectArrayByNumber(players, [{key: 'place', direction: 'ASC'}, {key: 'plMax', direction: 'ASC'}, {key: 'plHits', direction: 'DESC'}]);

    for (var i = 0, player; i < players.length; i++) {
        player = players[i];

        if (i === 0) {
            players[i].position = 1;
        }
        else {
            if (player.place === players[i-1].place) {
                player.position = players[i-1].position;
            }
            else {
                player.position = i + 1;
            }
        }
    }

	return players;
};










