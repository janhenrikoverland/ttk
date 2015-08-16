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
	};
	
	return {
		util: util
	};
};

TTK.core.extendConfig = function(config) {
	
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
	
	// team map
	config.teamIdTeamNameMap = function() {
		var map = {};
		
		for (var i = 0; i < config.teams.length; i++) {
			map[config.teams[i].id] = config.teams[i].name;
		}
		
		return map;
	}();
	
	return config;
};

TTK.core.applyUpdate = function(ttk, update) {
	var players = ttk.config.players;
	
	for (var i = 0, player; i < players.length; i++) {
		player = players[i];
		
		player.iktsScore = update.iktsScores[player.id];
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
		
		for (var j = 0, team, diff, score; j < player.table.length; j++) {
			team = player.table[j];
			
			diff = ttk.util.number.difference(j, ttk.util.array.indexOf(standing, team));
			
			score = config.scoreArray[diff];
			
			player.teamScores.push(score);
			player.teamColors.push(config.colorArray[diff]);
			player.plScore += score;
		}
	}
	
	// ikts places
	ttk.util.array.sortObjectArrayByNumber(players, [{key: 'iktsScore', direction: 'DESC'}]);

    for (var i = 0, player; i < players.length; i++) {
        player = players[i];

        if (i === 0) {
            players[i].iktsPlace = 1;
        }
        else {
            if (player.iktsScore === players[i-1].iktsScore) {
                player.iktsPlace = players[i-1].iktsPlace;
            }
            else {
                player.iktsPlace = i + 1;
            }
        }
    }

    // table places
	ttk.util.array.sortObjectArrayByNumber(players, [{key: 'plScore', direction: 'ASC'}, {key: 'name', direction: 'ASC'}]);
	
    for (var i = 0, player; i < players.length; i++) {
        player = players[i];

        if (i === 0) {
            players[i].plPlace = 1;
        }
        else {
            if (player.plScore === players[i-1].plScore) {
                player.plPlace = players[i-1].plPlace;
            }
            else {
                player.plPlace = i + 1;
            }
        }
    }
	
	// places	
	for (var i = 0, player; i < players.length; i++) {
		players[i].place = players[i].iktsPlace + players[i].plPlace;
	}
	
	// position
    ttk.util.array.sortObjectArrayByNumber(players, [{key: 'place', direction: 'ASC'}, {key: 'iktsPlace', direction: 'DESC'}, {key: 'name', direction: 'ASC'}]);
	
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
	
	
	
	
	
	
	
	
	
	
