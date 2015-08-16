Ext.application({
	name: 'TTKE1314',
	launch: function() {
		TTK.app = {};

        // TTK
		TTK.app.getTTK = function(name) {
			var getResultHtml,
				getIktsHtml,
				getPlHtml,
				getTablesHtml,
				initialize;
				//ttk;

			getResultHtml = function() {
				var html = '',
					players = ttk.players;

				html += '<table>';

				ttk.util.array.sortObjectArrayByNumber(players, [{key: 'place', direction: 'ASC'}, {key: 'plScore', direction: 'ASC'}, {key: 'name', direction: 'ASC'}]);

				for (var i = 0, player, color, cls, place; i < players.length; i++) {
					player = players[i];
					color = ttk.config.placeColor[player.position - 1];
                    fontSize = ttk.config.placeFontSize[player.position - 1];
					cls = i === 0 ? 'winner1' : (i === 1 || i === 2 ? 'winner2' : (i === (players.length - 1) ? 'loser1' : ''));
					place = player.place;
					html += '<tr>';
					html += '<td class="name ' + cls + '" style="color:' + color + '; font-size:' + fontSize + '">' + player.name.toUpperCase() + '</td>';
					html += '<td class="place ' + cls + '" style="color:' + color + '; font-size:' + fontSize + '">' + place + '</td>';
					html += '</tr>';
				}

				html += '</table>';

				return html;
			};

			getIktsHtml = function() {
				var html = '',
					players = ttk.players,
					bestScore;

				ttk.util.array.sortObjectArrayByNumber(players, [{key: 'iktsPlace', direction: 'ASC'}, {key: 'name', direction: 'ASC'}]);

				bestScore = players[0].iktsScore;

				html += '<table>';

				for (var i = 0, player; i < players.length; i++) {
					player = players[i];
					html += '<tr>';
					html += '<td class="number">' + (player.iktsPlace < 9 ? '0': '') + (player.iktsPlace) + '.</td>';
					html += '<td class="player" style="color:' + ttk.config.placeColor[player.position - 1] + '">' + player.name + '</td>';
					html += '<td class="score">' + player.iktsScore + '</td>';

					if (i > 0 && (bestScore - player.iktsScore > 0)) {
						html += '<td class="diff">' + (player.iktsScore - bestScore) + '</td>';
					}

					html += '</tr>';
				}

				html += '</table>';

				return html;
			};

			getPlHtml = function() {
				var html = '',
					players = ttk.players,
					bestScore;

				ttk.util.array.sortObjectArrayByNumber(players, [{key: 'plPlace', direction: 'ASC'}, {key: 'name', direction: 'ASC'}]);

				bestScore = players[0].plScore;

				html += '<table>';

				for (var i = 0, player; i < players.length; i++) {
					player = players[i];
					html += '<tr>';
					html += '<td class="number">' + (player.plPlace < 9 ? '0': '') + (player.plPlace) + '.</td>';
					html += '<td class="player" style="color:' + ttk.config.placeColor[player.position - 1] + '">' + player.name + '</td>';
					html += '<td class="score">' + player.plScore + '</td>';

					if (i > 0 && (player.plScore - bestScore > 0)) {
						html += '<td class="diff">+' + (player.plScore - bestScore) + '</td>';
					}

					html += '</tr>';
				}

				html += '</table>';

				return html;
			};

			getTablesHtml = function() {
				var html = '',
					players = ttk.players;

				// fasit
				html += '<table>';
				html += '<tr><td colspan="3" class="name">Premier League</td></tr>';
				html += '<tr><td class="empty"></td></tr>';

				for (var i = 0, teamId, score = -1, color = ttk.config.teamColors[0]; i < ttk.update.standing.length; i++) {
					teamId = ttk.update.standing[i];

					html += '<tr>';
					html += '<td class="number">' + (i < 9 ? '0': '') + (i + 1) + '.</td>';
					html += '<td class="team" style="color:' + color + '">' + ttk.config.teamIdTeamNameMap[teamId] + '</td>';
					html += '<td class="score" style="color:' + color + '">' + score + '</td>';
					html += '</tr>';
				}

				html += '</table>';

				// player tables
				for (var i = 0, player, table; i < players.length; i++) {
					player = players[i];
					table = player.table;
					html += '<table>';
					html += '<tr><td colspan="3" class="name">' + (player.plPlace < 9 ? '0': '') + player.plPlace + '.<span style="padding:0 5px"></span>' + player.name + ' (' + player.plScore + ')</td></tr>';
					html += '<tr><td class="empty"></td></tr>';

					for (var j = 0, score, color; j < table.length; j++) {
						score = player.teamScores[j];
						color = player.teamColors[j];
						html += '<tr>';
						html += '<td class="number">' + (j < 9 ? '0': '') + (j + 1) + '.</td>';
						html += '<td class="team" style="color:' + color + '">' + ttk.config.teamIdTeamNameMap[table[j]] + '</td>';
						html += '<td class="score" style="color:' + color + '">' + (score > -1 ? '+' : '') + score + '</td>';
						html += '</tr>';
					}

					html += '</table>';
				}

				return html;
			};

			getViewport = function() {
				return Ext.create('Ext.Container', {
					fullscreen: true,
					scrollable: 'vertical',
					style: 'background-color:#fff',
					items: function() {
						var html = '<header>TTKE';
						html += '<span class="year">' + ttk.config.season + '</span>';
						html += '<div class="date"><div>' + ttk.update.lastUpdated + '</div><div>' + ttk.update.gameWeek + '</div></div>';
						html += '</header>';
						html += '<div id="container">';
						html += '<div id="result"></div>';
						html += '<h2>I KNOW THE SCORE</h2>';
						html += '<div id="ikts"></div>';
						html += '<h2>TABELL</h2>';
						html += '<div id="pl"></div>';
						html += '<div id="tables"></div>';
						html += '</div>';

						return {
							html: html
						};
					}()
				});
			};

			initialize = function() {
				ttk = TTK.core.getInstance();
				ttk.config = TTK.core.extendConfig(TTK.config[name]);

				TTK.core.applyUpdate(ttk, TTK.update[name]);

				ttk.players = TTK.core.extendPlayers(ttk);

				ttk.viewport = getViewport();

				Ext.get('result').dom.innerHTML = getResultHtml();
				Ext.get('ikts').dom.innerHTML = getIktsHtml();
				Ext.get('pl').dom.innerHTML = getPlHtml();
				Ext.get('tables').dom.innerHTML = getTablesHtml();
			}();
		};

		TTK.app.getTTK('ttke');
	}
});
