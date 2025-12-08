(() => {
  // src/web/_vendor/cal-heatmap.css
  var cal_heatmap_default = '/* Cal-HeatMap CSS */\r\n\r\n.cal-heatmap-container {\r\n	display: block;\r\n}\r\n\r\n.cal-heatmap-container .graph\r\n{\r\n	font-family: "Lucida Grande", Lucida, Verdana, sans-serif;\r\n}\r\n\r\n.cal-heatmap-container .graph-label\r\n{\r\n	fill: #999;\r\n	font-size: 10px\r\n}\r\n\r\n.cal-heatmap-container .graph, .cal-heatmap-container .graph-legend rect {\r\n	shape-rendering: crispedges\r\n}\r\n\r\n.cal-heatmap-container .graph-rect\r\n{\r\n	fill: #ededed\r\n}\r\n\r\n.cal-heatmap-container .graph-subdomain-group rect:hover\r\n{\r\n	stroke: #000;\r\n	stroke-width: 1px\r\n}\r\n\r\n.cal-heatmap-container .subdomain-text {\r\n	font-size: 8px;\r\n	fill: #999;\r\n	pointer-events: none\r\n}\r\n\r\n.cal-heatmap-container .hover_cursor:hover {\r\n	cursor: pointer\r\n}\r\n\r\n.cal-heatmap-container .qi {\r\n	background-color: #999;\r\n	fill: #999\r\n}\r\n\r\n/*\r\nRemove comment to apply this style to date with value equal to 0\r\n.q0\r\n{\r\n	background-color: #fff;\r\n	fill: #fff;\r\n	stroke: #ededed\r\n}\r\n*/\r\n\r\n.cal-heatmap-container .q1\r\n{\r\n	background-color: #dae289;\r\n	fill: #dae289\r\n}\r\n\r\n.cal-heatmap-container .q2\r\n{\r\n	background-color: #cedb9c;\r\n	fill: #9cc069\r\n}\r\n\r\n.cal-heatmap-container .q3\r\n{\r\n	background-color: #b5cf6b;\r\n	fill: #669d45\r\n}\r\n\r\n.cal-heatmap-container .q4\r\n{\r\n	background-color: #637939;\r\n	fill: #637939\r\n}\r\n\r\n.cal-heatmap-container .q5\r\n{\r\n	background-color: #3b6427;\r\n	fill: #3b6427\r\n}\r\n\r\n.cal-heatmap-container rect.highlight\r\n{\r\n	stroke:#444;\r\n	stroke-width:1\r\n}\r\n\r\n.cal-heatmap-container text.highlight\r\n{\r\n	fill: #444\r\n}\r\n\r\n.cal-heatmap-container rect.highlight-now\r\n{\r\n	stroke: red\r\n}\r\n\r\n.cal-heatmap-container text.highlight-now\r\n{\r\n	fill: red;\r\n	font-weight: 800\r\n}\r\n\r\n.cal-heatmap-container .domain-background {\r\n	fill: none;\r\n	shape-rendering: crispedges\r\n}\r\n\r\n.cal-heatmap-container .day-name-rect {\r\n	fill: transparent;\r\n}\r\n\r\n.cal-heatmap-container .day-name-text {\r\n	font-size: 10px;\r\n	fill: #999;\r\n}\r\n\r\n.ch-tooltip {\r\n	padding: 10px;\r\n	background: #222;\r\n	color: #bbb;\r\n	font-size: 12px;\r\n	line-height: 1.4;\r\n	width: 140px;\r\n	position: absolute;\r\n	z-index: 99999;\r\n	text-align: center;\r\n	border-radius: 2px;\r\n	box-shadow: 2px 2px 2px rgba(0,0,0,0.2);\r\n	display: none;\r\n	box-sizing: border-box;\r\n}\r\n\r\n.ch-tooltip::after{\r\n	position: absolute;\r\n	width: 0;\r\n	height: 0;\r\n	border-color: transparent;\r\n	border-style: solid;\r\n	content: "";\r\n	padding: 0;\r\n	display: block;\r\n	bottom: -6px;\r\n	left: 50%;\r\n	margin-left: -6px;\r\n    border-width: 6px 6px 0;\r\n    border-top-color: #222;\r\n}\r\n';

  // src/web/css/review-heatmap.css
  var review_heatmap_default = '/* \r\nThis file is part of the Review Heatmap add-on for Anki\r\n\r\nCustom Heatmap CSS\r\n\r\nCopyright: (c) 2016-2022 Glutanimate <https://glutanimate.com/>\r\nLicense: GNU AGPLv3 <https://www.gnu.org/licenses/agpl.html>\r\n*/\r\n\r\n/* Special classes:\r\n"rh-platform-mac": Set when run on macOS\r\n"rh-platform-win": Set when run on Windows\r\n"rh-platform-lin": Set when run on Linux\r\n"rh-theme-olive", "rh-theme-lime", "rh-theme-ice",\r\n    "rh-theme-magenta", "rh-theme-flame": Set when respective theme active\r\n"rh-mode-year": Set when calendar set to year mode\r\n"rh-mode-months": Set when calendar set to months mode\r\n"rh-view-deckbrowser", "rh-view-overview", "rh-view-stats": Set when drawn\r\n    on respective view\r\n"rh-disable-stats": Set when streak stats disabled\r\n"rh-disable-heatmap": Set when heatmap disabled\r\n"night_mode": Set when night mode active (provided by Night Mode add-on)\r\n*/\r\n\r\n/* General layout */\r\n/* ################################################################### */\r\n\r\n.rh-container {\r\n    margin-top: 1em;\r\n}\r\n\r\n.heatmap {\r\n    display:inline-block;\r\n}\r\n.heatmap-controls {\r\n    margin-bottom: 0;\r\n}\r\n\r\n/* Heatmap graph adjustments */\r\n/* ################################################################### */\r\n\r\n.cal-heatmap-container .graph {\r\n    font-family: unset;\r\n}\r\n.graph-label {\r\n    fill: #808080;\r\n}\r\n\r\n/* Graph rects */\r\n.cal-heatmap-container rect.highlight-now {\r\n    stroke: black;\r\n}\r\n.cal-heatmap-container rect.highlight {\r\n    stroke: #E9002E;\r\n}\r\n.cal-heatmap-container .graph-rect {\r\n    fill: #eaeaea;\r\n}\r\n.night_mode .cal-heatmap-container .graph-rect {\r\n    fill: #222222;\r\n}\r\n\r\n/* Heatmap hover tooltip */\r\n/* ################################################################### */\r\n\r\n.ch-tooltip {\r\n    color: rgb(240, 240, 240);\r\n    animation: 0.5s ease 0s normal forwards 1 fadein;\r\n    -webkit-animation: 0.5s ease 0s normal forwards 1 fadein;\r\n}\r\n/* Delay tooltip using fadein */\r\n@keyframes fadein {\r\n    0% { opacity:0; }\r\n    66% { opacity:0; }\r\n    100% { opacity:0.9; }\r\n}\r\n@-webkit-keyframes fadein {\r\n    0% { opacity:0; }\r\n    66% { opacity:0; }\r\n    100% { opacity:0.9; }\r\n}\r\n\r\n/* Heatmap button area */\r\n/* ################################################################### */\r\n.alignleft {\r\n    float: left;\r\n    width:33.33333%;\r\n    text-align:left;\r\n}\r\n.aligncenter {\r\n    float: left;\r\n    width:33.33333%;\r\n    text-align:center;\r\n}\r\n.alignright {\r\n    float: left;\r\n    width:33.33333%;\r\n    text-align:right;\r\n}\r\n\r\n/* Heatmap buttons */\r\n/* ################################################################### */\r\n\r\n/* Regular buttons */\r\n.hm-btn {\r\n    height: 100%;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    background: #e6e6e6;\r\n    color: #808080;\r\n    padding: 2px 8px;\r\n    border-radius: 3px;\r\n    margin-left: 2px;\r\n    text-decoration: none;\r\n    user-select: none;\r\n    vertical-align: center;\r\n}\r\n.hm-btn:hover {\r\n    background: #bfbfbf;\r\n}\r\n.hm-btn:active {\r\n    background: #000;\r\n}\r\n.night_mode .hm-btn {\r\n    background-color: #313d45;\r\n}\r\n.night_mode .hm-btn:hover {\r\n    background-color: #374f5b;\r\n}\r\n.night_mode .hm-btn:active {\r\n    background-color: #433376;\r\n}\r\n\r\n\r\n/* Options button */\r\n.opts-btn {\r\n    padding: 2px 4px;\r\n}\r\n.opts-btn:hover {\r\n    background: #bfbfbf;\r\n}\r\n.opts-btn>img {\r\n    position:relative;\r\n    top: calc(50% - 12px);\r\n    height: 10px;\r\n    width: 10px;\r\n}\r\n\r\n/* Heatmap activity type widget */\r\n/* ################################################################### */\r\n.hm-sel {\r\n    display: inline-block;\r\n    height: 100%;\r\n    padding: 4px 8px;\r\n    font-size: 80%;\r\n    cursor: pointer;\r\n    color: #808080;\r\n    border-radius: 3px;\r\n    user-select: none;\r\n    border: none;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background: url(qrc:/review_heatmap/icons/down.svg) 96% / 10% no-repeat #e6e6e6;\r\n}\r\nselect.hm-sel:hover {\r\n    background: url(qrc:/review_heatmap/icons/down.svg) 96% / 10% no-repeat #bfbfbf;\r\n}\r\nselect.hm-sel:active, select.hm-sel:focus {\r\n    background: url(qrc:/review_heatmap/icons/down.svg) 96% / 10% no-repeat #e6e6e6;\r\n}\r\n\r\n/* Heatmap links */\r\n/* ################################################################### */\r\n\r\n/* we use these instead of regular links to prevent bugs with page navigation,\r\n   prevent the link color from changing on click, etc.*/\r\n\r\n.linkspan {\r\n     cursor:pointer;\r\n     color:blue;\r\n     text-decoration:underline;\r\n}\r\n\r\n.night_mode .linkspan {\r\n    color: white;\r\n}\r\n\r\n/* Streak stats */\r\n/* ################################################################### */\r\n\r\n/* TODO: investigate why we had two copies of these */\r\n.streak {margin-top: 0.5em;}\r\n.streak-info {\r\n    margin-left: 1em;\r\n}\r\n.sstats {\r\n    font-weight: bold;\r\n    color: #E6E6E6;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* Color themes */\r\n/* ################################################################### */\r\n\r\n\r\n/* FORECAST RECT COLORS */\r\n/*\r\n- same for every theme \r\n- reverse order because of negative value workaround \r\n*/\r\n.cal-heatmap-container .q1{fill: #525252}\r\n.cal-heatmap-container .q2{fill: #616161}\r\n.cal-heatmap-container .q3{fill: #707070}\r\n.cal-heatmap-container .q4{fill: #7F7F7F}\r\n.cal-heatmap-container .q5{fill: #8E8E8E}\r\n.cal-heatmap-container .q6{fill: #9D9D9D}\r\n.cal-heatmap-container .q7{fill: #ACACAC}\r\n.cal-heatmap-container .q8{fill: #BBBBBB}\r\n.cal-heatmap-container .q9{fill: #CACACA}\r\n.cal-heatmap-container .q10{fill: #D9D9D9}\r\n\r\n.night_mode .cal-heatmap-container .q1{fill: #5d5f5f}\r\n.night_mode .cal-heatmap-container .q2{fill: #585a5a}\r\n.night_mode .cal-heatmap-container .q3{fill: #535555}\r\n.night_mode .cal-heatmap-container .q4{fill: #4e5050}\r\n.night_mode .cal-heatmap-container .q5{fill: #494b4b}\r\n.night_mode .cal-heatmap-container .q6{fill: #444646}\r\n.night_mode .cal-heatmap-container .q7{fill: #3f4141}\r\n.night_mode .cal-heatmap-container .q8{fill: #3a3c3c}\r\n.night_mode .cal-heatmap-container .q9{fill: #353737}\r\n.night_mode .cal-heatmap-container .q10{fill: #313232}\r\n\r\n/* REVIEW HISTORY COLORS */\r\n/*\r\n- different between each theme\r\n*/\r\n\r\n/* olive */\r\n.rh-theme-olive .cal-heatmap-container .q11{fill: #dae289}\r\n.rh-theme-olive .cal-heatmap-container .q12{fill: #bbd179}\r\n.rh-theme-olive .cal-heatmap-container .q13{fill: #9cc069}\r\n.rh-theme-olive .cal-heatmap-container .q14{fill: #8ab45d}\r\n.rh-theme-olive .cal-heatmap-container .q15{fill: #78a851}\r\n.rh-theme-olive .cal-heatmap-container .q16{fill: #669d45}\r\n.rh-theme-olive .cal-heatmap-container .q17{fill: #648b3f}\r\n.rh-theme-olive .cal-heatmap-container .q18{fill: #637939}\r\n.rh-theme-olive .cal-heatmap-container .q19{fill: #4f6e30}\r\n.rh-theme-olive .cal-heatmap-container .q20{fill: #3b6427}\r\n\r\n.rh-theme-olive .rh-col11{color: #dae289}\r\n.rh-theme-olive .rh-col12{color: #bbd179}\r\n.rh-theme-olive .rh-col13{color: #9cc069}\r\n.rh-theme-olive .rh-col14{color: #8ab45d}\r\n.rh-theme-olive .rh-col15{color: #78a851}\r\n.rh-theme-olive .rh-col16{color: #669d45}\r\n.rh-theme-olive .rh-col17{color: #648b3f}\r\n.rh-theme-olive .rh-col18{color: #637939}\r\n.rh-theme-olive .rh-col19{color: #4f6e30}\r\n.rh-theme-olive .rh-col20{color: #3b6427}\r\n\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q11{fill: #3b6427}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q12{fill: #4f6e30}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q13{fill: #637939}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q14{fill: #648b3f}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q15{fill: #669d45}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q16{fill: #78a851}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q17{fill: #8ab45d}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q18{fill: #9cc069}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q19{fill: #bbd179}\r\n.night_mode .rh-theme-olive .cal-heatmap-container .q20{fill: #dae289}\r\n\r\n.night_mode .rh-theme-olive .rh-col11{color: #3b6427}\r\n.night_mode .rh-theme-olive .rh-col12{color: #4f6e30}\r\n.night_mode .rh-theme-olive .rh-col13{color: #637939}\r\n.night_mode .rh-theme-olive .rh-col14{color: #648b3f}\r\n.night_mode .rh-theme-olive .rh-col15{color: #669d45}\r\n.night_mode .rh-theme-olive .rh-col16{color: #78a851}\r\n.night_mode .rh-theme-olive .rh-col17{color: #8ab45d}\r\n.night_mode .rh-theme-olive .rh-col18{color: #9cc069}\r\n.night_mode .rh-theme-olive .rh-col19{color: #bbd179}\r\n.night_mode .rh-theme-olive .rh-col20{color: #dae289}\r\n\r\n/* lime */\r\n.rh-theme-lime .cal-heatmap-container .q11{fill: #d6e685}\r\n.rh-theme-lime .cal-heatmap-container .q12{fill: #bddb7a}\r\n.rh-theme-lime .cal-heatmap-container .q13{fill: #a4d06f}\r\n.rh-theme-lime .cal-heatmap-container .q14{fill: #8cc665}\r\n.rh-theme-lime .cal-heatmap-container .q15{fill: #74ba58}\r\n.rh-theme-lime .cal-heatmap-container .q16{fill: #5cae4c}\r\n.rh-theme-lime .cal-heatmap-container .q17{fill: #44a340}\r\n.rh-theme-lime .cal-heatmap-container .q18{fill: #378f36}\r\n.rh-theme-lime .cal-heatmap-container .q19{fill: #2a7b2c}\r\n.rh-theme-lime .cal-heatmap-container .q20{fill: #1e6823}\r\n\r\n.rh-theme-lime .rh-col11{color: #d6e685}\r\n.rh-theme-lime .rh-col12{color: #bddb7a}\r\n.rh-theme-lime .rh-col13{color: #a4d06f}\r\n.rh-theme-lime .rh-col14{color: #8cc665}\r\n.rh-theme-lime .rh-col15{color: #74ba58}\r\n.rh-theme-lime .rh-col16{color: #5cae4c}\r\n.rh-theme-lime .rh-col17{color: #44a340}\r\n.rh-theme-lime .rh-col18{color: #378f36}\r\n.rh-theme-lime .rh-col19{color: #2a7b2c}\r\n.rh-theme-lime .rh-col20{color: #1e6823}\r\n\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q11{fill: #1e6823}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q12{fill: #2a7b2c}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q13{fill: #378f36}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q14{fill: #44a340}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q15{fill: #5cae4c}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q16{fill: #74ba58}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q17{fill: #8cc665}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q18{fill: #a4d06f}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q19{fill: #bddb7a}\r\n.night_mode .rh-theme-lime .cal-heatmap-container .q20{fill: #d6e685}\r\n\r\n.night_mode .rh-theme-lime .rh-col11{color: #1e6823}\r\n.night_mode .rh-theme-lime .rh-col12{color: #2a7b2c}\r\n.night_mode .rh-theme-lime .rh-col13{color: #378f36}\r\n.night_mode .rh-theme-lime .rh-col14{color: #44a340}\r\n.night_mode .rh-theme-lime .rh-col15{color: #5cae4c}\r\n.night_mode .rh-theme-lime .rh-col16{color: #74ba58}\r\n.night_mode .rh-theme-lime .rh-col17{color: #8cc665}\r\n.night_mode .rh-theme-lime .rh-col18{color: #a4d06f}\r\n.night_mode .rh-theme-lime .rh-col19{color: #bddb7a}\r\n.night_mode .rh-theme-lime .rh-col20{color: #d6e685}\r\n\r\n/* ice */\r\n.rh-theme-ice .cal-heatmap-container .q11{fill: #a8d5f6}\r\n.rh-theme-ice .cal-heatmap-container .q12{fill: #95c8f3}\r\n.rh-theme-ice .cal-heatmap-container .q13{fill: #82bbf0}\r\n.rh-theme-ice .cal-heatmap-container .q14{fill: #70afee}\r\n.rh-theme-ice .cal-heatmap-container .q15{fill: #5da2eb}\r\n.rh-theme-ice .cal-heatmap-container .q16{fill: #4a95e8}\r\n.rh-theme-ice .cal-heatmap-container .q17{fill: #3889e6}\r\n.rh-theme-ice .cal-heatmap-container .q18{fill: #257ce3}\r\n.rh-theme-ice .cal-heatmap-container .q19{fill: #126fe0}\r\n.rh-theme-ice .cal-heatmap-container .q20{fill: #0063de}\r\n\r\n.rh-theme-ice .rh-col11{color: #a8d5f6}\r\n.rh-theme-ice .rh-col12{color: #95c8f3}\r\n.rh-theme-ice .rh-col13{color: #82bbf0}\r\n.rh-theme-ice .rh-col14{color: #70afee}\r\n.rh-theme-ice .rh-col15{color: #5da2eb}\r\n.rh-theme-ice .rh-col16{color: #4a95e8}\r\n.rh-theme-ice .rh-col17{color: #3889e6}\r\n.rh-theme-ice .rh-col18{color: #257ce3}\r\n.rh-theme-ice .rh-col19{color: #126fe0}\r\n.rh-theme-ice .rh-col20{color: #0063de}\r\n\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q11{fill: #0063de}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q12{fill: #126fe0}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q13{fill: #257ce3}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q14{fill: #3889e6}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q15{fill: #4a95e8}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q16{fill: #5da2eb}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q17{fill: #70afee}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q18{fill: #82bbf0}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q19{fill: #95c8f3}\r\n.night_mode .rh-theme-ice .cal-heatmap-container .q20{fill: #a8d5f6}\r\n\r\n.night_mode .rh-theme-ice .rh-col11{color: #0063de}\r\n.night_mode .rh-theme-ice .rh-col12{color: #126fe0}\r\n.night_mode .rh-theme-ice .rh-col13{color: #257ce3}\r\n.night_mode .rh-theme-ice .rh-col14{color: #3889e6}\r\n.night_mode .rh-theme-ice .rh-col15{color: #4a95e8}\r\n.night_mode .rh-theme-ice .rh-col16{color: #5da2eb}\r\n.night_mode .rh-theme-ice .rh-col17{color: #70afee}\r\n.night_mode .rh-theme-ice .rh-col18{color: #82bbf0}\r\n.night_mode .rh-theme-ice .rh-col19{color: #95c8f3}\r\n.night_mode .rh-theme-ice .rh-col20{color: #a8d5f6}\r\n\r\n/* magenta */\r\n.rh-theme-magenta .cal-heatmap-container .q11{fill: #fde0dd}\r\n.rh-theme-magenta .cal-heatmap-container .q12{fill: #fcc5c0}\r\n.rh-theme-magenta .cal-heatmap-container .q13{fill: #fa9fb5}\r\n.rh-theme-magenta .cal-heatmap-container .q14{fill: #f768a1}\r\n.rh-theme-magenta .cal-heatmap-container .q15{fill: #ea4e9c}\r\n.rh-theme-magenta .cal-heatmap-container .q16{fill: #dd3497}\r\n.rh-theme-magenta .cal-heatmap-container .q17{fill: #ae017e}\r\n.rh-theme-magenta .cal-heatmap-container .q18{fill: #7a0177}\r\n.rh-theme-magenta .cal-heatmap-container .q19{fill: #610070}\r\n.rh-theme-magenta .cal-heatmap-container .q20{fill: #49006a}\r\n\r\n.rh-theme-magenta .rh-col11{color: #fde0dd}\r\n.rh-theme-magenta .rh-col12{color: #fcc5c0}\r\n.rh-theme-magenta .rh-col13{color: #fa9fb5}\r\n.rh-theme-magenta .rh-col14{color: #f768a1}\r\n.rh-theme-magenta .rh-col15{color: #ea4e9c}\r\n.rh-theme-magenta .rh-col16{color: #dd3497}\r\n.rh-theme-magenta .rh-col17{color: #ae017e}\r\n.rh-theme-magenta .rh-col18{color: #7a0177}\r\n.rh-theme-magenta .rh-col19{color: #610070}\r\n.rh-theme-magenta .rh-col20{color: #49006a}\r\n\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q11{fill: #49006a}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q12{fill: #610070}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q13{fill: #7a0177}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q14{fill: #ae017e}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q15{fill: #dd3497}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q16{fill: #ea4e9c}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q17{fill: #f768a1}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q18{fill: #fa9fb5}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q19{fill: #fcc5c0}\r\n.night_mode .rh-theme-magenta .cal-heatmap-container .q20{fill: #fde0dd}\r\n\r\n.night_mode .rh-theme-magenta .rh-col11{color: #49006a}\r\n.night_mode .rh-theme-magenta .rh-col12{color: #610070}\r\n.night_mode .rh-theme-magenta .rh-col13{color: #7a0177}\r\n.night_mode .rh-theme-magenta .rh-col14{color: #ae017e}\r\n.night_mode .rh-theme-magenta .rh-col15{color: #dd3497}\r\n.night_mode .rh-theme-magenta .rh-col16{color: #ea4e9c}\r\n.night_mode .rh-theme-magenta .rh-col17{color: #f768a1}\r\n.night_mode .rh-theme-magenta .rh-col18{color: #fa9fb5}\r\n.night_mode .rh-theme-magenta .rh-col19{color: #fcc5c0}\r\n.night_mode .rh-theme-magenta .rh-col20{color: #fde0dd}\r\n\r\n\r\n/* flame */\r\n.rh-theme-flame .cal-heatmap-container .q11{fill: #ffeda0}\r\n.rh-theme-flame .cal-heatmap-container .q12{fill: #fed976}\r\n.rh-theme-flame .cal-heatmap-container .q13{fill: #feb24c}\r\n.rh-theme-flame .cal-heatmap-container .q14{fill: #fd8d3c}\r\n.rh-theme-flame .cal-heatmap-container .q15{fill: #fc6d33}\r\n.rh-theme-flame .cal-heatmap-container .q16{fill: #fc4e2a}\r\n.rh-theme-flame .cal-heatmap-container .q17{fill: #e31a1c}\r\n.rh-theme-flame .cal-heatmap-container .q18{fill: #d00d21}\r\n.rh-theme-flame .cal-heatmap-container .q19{fill: #bd0026}\r\n.rh-theme-flame .cal-heatmap-container .q20{fill: #800026}\r\n\r\n.rh-theme-flame .rh-col11{color: #ffeda0}\r\n.rh-theme-flame .rh-col12{color: #fed976}\r\n.rh-theme-flame .rh-col13{color: #feb24c}\r\n.rh-theme-flame .rh-col14{color: #fd8d3c}\r\n.rh-theme-flame .rh-col15{color: #fc6d33}\r\n.rh-theme-flame .rh-col16{color: #fc4e2a}\r\n.rh-theme-flame .rh-col17{color: #e31a1c}\r\n.rh-theme-flame .rh-col18{color: #d00d21}\r\n.rh-theme-flame .rh-col19{color: #bd0026}\r\n.rh-theme-flame .rh-col20{color: #800026}\r\n\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q11{fill: #800026}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q12{fill: #bd0026}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q13{fill: #d00d21}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q14{fill: #e31a1c}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q15{fill: #fc4e2a}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q16{fill: #fc6d33}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q17{fill: #fd8d3c}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q18{fill: #feb24c}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q19{fill: #fed976}\r\n.night_mode .rh-theme-flame .cal-heatmap-container .q20{fill: #ffeda0}\r\n\r\n.night_mode .rh-theme-flame .rh-col11{color: #800026}\r\n.night_mode .rh-theme-flame .rh-col12{color: #bd0026}\r\n.night_mode .rh-theme-flame .rh-col13{color: #d00d21}\r\n.night_mode .rh-theme-flame .rh-col14{color: #e31a1c}\r\n.night_mode .rh-theme-flame .rh-col15{color: #fc4e2a}\r\n.night_mode .rh-theme-flame .rh-col16{color: #fc6d33}\r\n.night_mode .rh-theme-flame .rh-col17{color: #fd8d3c}\r\n.night_mode .rh-theme-flame .rh-col18{color: #feb24c}\r\n.night_mode .rh-theme-flame .rh-col19{color: #fed976}\r\n.night_mode .rh-theme-flame .rh-col20{color: #ffeda0}\r\n\r\n\r\n/* Platform-specific adjustments / workarounds */\r\n/* ################################################################### */\r\n';

  // src/web/_vendor/cal-heatmap.js
  var d3 = window.d3;
  var CalHeatMap = function() {
    "use strict";
    var self = this;
    this.allowedDataType = ["json", "csv", "tsv", "txt"];
    this.options = {
      // selector string of the container to append the graph to
      // Accept any string value accepted by document.querySelector or CSS3
      // or an Element object
      itemSelector: "#cal-heatmap-mileage",
      // Whether to paint the calendar on init()
      // Used by testsuite to reduce testing time
      paintOnLoad: true,
      // ================================================
      // DOMAIN
      // ================================================
      // Number of domain to display on the graph
      range: 12,
      // Size of each cell, in pixel
      cellSize: 10,
      // Padding between each cell, in pixel
      cellPadding: 2,
      // For rounded subdomain rectangles, in pixels
      cellRadius: 0,
      domainGutter: 2,
      domainMargin: [0, 0, 0, 0],
      domain: "hour",
      subDomain: "min",
      // Number of columns to split the subDomains to
      // If not null, will takes precedence over rowLimit
      colLimit: null,
      // Number of rows to split the subDomains to
      // Will be ignored if colLimit is not null
      rowLimit: null,
      // First day of the week is Monday
      // 0 to start the week on Sunday
      weekStartOnMonday: true,
      //Show week name when showing full month
      dayLabel: false,
      // Start date of the graph
      // @default now
      start: /* @__PURE__ */ new Date(),
      minDate: null,
      maxDate: null,
      // Date regarded as today
      // @default now
      today: /* @__PURE__ */ new Date(),
      // ================================================
      // DATA
      // ================================================
      // Data source
      // URL, where to fetch the original datas
      data: "",
      // Data type
      // Default: json
      dataType: this.allowedDataType[0],
      // Payload sent when using POST http method
      // Leave to null (default) for GET request
      // Expect a string, formatted like "a=b;c=d"
      dataPostPayload: null,
      // Additional headers sent when requesting data
      // Expect an object formatted like:
      // { 'X-CSRF-TOKEN': 'token' }
      dataRequestHeaders: null,
      // Whether to consider missing date:value from the datasource
      // as equal to 0, or just leave them as missing
      considerMissingDataAsZero: false,
      // Load remote data on calendar creation
      // When false, the calendar will be left empty
      loadOnInit: true,
      // Calendar orientation
      // false: display domains side by side
      // true : display domains one under the other
      verticalOrientation: false,
      // Domain dynamic width/height
      // The width on a domain depends on the number of
      domainDynamicDimension: true,
      // Domain Label properties
      label: {
        // valid: top, right, bottom, left
        position: "bottom",
        // Valid: left, center, right
        // Also valid are the direct svg values: start, middle, end
        align: "center",
        // By default, there is no margin/padding around the label
        offset: {
          x: 0,
          y: 0
        },
        rotate: null,
        // Used only on vertical orientation
        width: 100,
        // Used only on horizontal orientation
        height: null
      },
      // ================================================
      // LEGEND
      // ================================================
      // Threshold for the legend
      legend: [10, 20, 30, 40],
      // Whether to display the legend
      displayLegend: true,
      legendCellSize: 10,
      legendCellPadding: 2,
      legendMargin: [0, 0, 0, 0],
      // Legend vertical position
      // top: place legend above calendar
      // bottom: place legend below the calendar
      legendVerticalPosition: "bottom",
      // Legend horizontal position
      // accepted values: left, center, right
      legendHorizontalPosition: "left",
      // Legend rotation
      // accepted values: horizontal, vertical
      legendOrientation: "horizontal",
      // Objects holding all the heatmap different colors
      // null to disable, and use the default css styles
      //
      // Examples:
      // legendColors: {
      //		min: "green",
      //		max: "red",
      //		empty: "#ffffff",
      //		base: "grey",
      //		overflow: "red"
      // }
      legendColors: null,
      // ================================================
      // HIGHLIGHT
      // ================================================
      // List of dates to highlight
      // Valid values:
      // - []: don't highlight anything
      // - "now": highlight the current date
      // - an array of Date objects: highlight the specified dates
      highlight: [],
      // ================================================
      // TEXT FORMATTING / i18n
      // ================================================
      // Name of the items to represent in the calendar
      itemName: ["item", "items"],
      // Formatting of the domain label
      // @default: null, will use the formatting according to domain type
      // Accept a string used as specifier by d3.time.format()
      // or a function
      //
      // Refer to https://github.com/mbostock/d3/wiki/Time-Formatting
      // for accepted date formatting used by d3.time.format()
      domainLabelFormat: null,
      // Formatting of the title displayed when hovering a subDomain cell
      subDomainTitleFormat: {
        empty: "{date}",
        filled: "{count} {name} {connector} {date}"
      },
      // Formatting of the {date} used in subDomainTitleFormat
      // @default: null, will use the formatting according to subDomain type
      // Accept a string used as specifier by d3.time.format()
      // or a function
      //
      // Refer to https://github.com/mbostock/d3/wiki/Time-Formatting
      // for accepted date formatting used by d3.time.format()
      subDomainDateFormat: null,
      // Formatting of the text inside each subDomain cell
      // @default: null, no text
      // Accept a string used as specifier by d3.time.format()
      // or a function
      //
      // Refer to https://github.com/mbostock/d3/wiki/Time-Formatting
      // for accepted date formatting used by d3.time.format()
      subDomainTextFormat: null,
      // Formatting of the title displayed when hovering a legend cell
      legendTitleFormat: {
        lower: "less than {min} {name}",
        inner: "between {down} and {up} {name}",
        upper: "more than {max} {name}"
      },
      // Animation duration, in ms
      animationDuration: 500,
      nextSelector: false,
      previousSelector: false,
      itemNamespace: "cal-heatmap",
      tooltip: false,
      // ================================================
      // EVENTS CALLBACK
      // ================================================
      // Callback when clicking on a time block
      onClick: null,
      // Callback after painting the empty calendar
      // Can be used to trigger an API call, once the calendar is ready to be filled
      afterLoad: null,
      // Callback after loading the next domain in the calendar
      afterLoadNextDomain: null,
      // Callback after loading the previous domain in the calendar
      afterLoadPreviousDomain: null,
      // Callback after finishing all actions on the calendar
      onComplete: null,
      // Callback after fetching the datas, but before applying them to the calendar
      // Used mainly to convert the datas if they're not formatted like expected
      // Takes the fetched "data" object as argument, must return a json object
      // formatted like {timestamp:count, timestamp2:count2},
      afterLoadData: function(data) {
        return data;
      },
      // Callback triggered after calling and completing update().
      afterUpdate: null,
      // Callback triggered after calling next().
      // The `status` argument is equal to true if there is no
      // more next domain to load
      //
      // This callback is also executed once, after calling previous(),
      // only when the max domain is reached
      onMaxDomainReached: null,
      // Callback triggered after calling previous().
      // The `status` argument is equal to true if there is no
      // more previous domain to load
      //
      // This callback is also executed once, after calling next(),
      // only when the min domain is reached
      onMinDomainReached: null
    };
    this._domainType = {
      "min": {
        name: "minute",
        level: 10,
        maxItemNumber: 60,
        defaultRowNumber: 10,
        defaultColumnNumber: 6,
        row: function(d2) {
          return self.getSubDomainRowNumber(d2);
        },
        column: function(d2) {
          return self.getSubDomainColumnNumber(d2);
        },
        position: {
          x: function(d2) {
            return Math.floor(d2.getMinutes() / self._domainType.min.row(d2));
          },
          y: function(d2) {
            return d2.getMinutes() % self._domainType.min.row(d2);
          }
        },
        format: {
          date: "%H:%M, %A %B %-e, %Y",
          legend: "",
          connector: "at"
        },
        extractUnit: function(d2) {
          return new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), d2.getHours(), d2.getMinutes()).getTime();
        }
      },
      "hour": {
        name: "hour",
        level: 20,
        maxItemNumber: function(d2) {
          switch (self.options.domain) {
            case "day":
              return 24;
            case "week":
              return 24 * 7;
            case "month":
              return 24 * (self.options.domainDynamicDimension ? self.getDayCountInMonth(d2) : 31);
          }
        },
        defaultRowNumber: 6,
        defaultColumnNumber: function(d2) {
          switch (self.options.domain) {
            case "day":
              return 4;
            case "week":
              return 28;
            case "month":
              return self.options.domainDynamicDimension ? self.getDayCountInMonth(d2) : 31;
          }
        },
        row: function(d2) {
          return self.getSubDomainRowNumber(d2);
        },
        column: function(d2) {
          return self.getSubDomainColumnNumber(d2);
        },
        position: {
          x: function(d2) {
            if (self.options.domain === "month") {
              if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
                return Math.floor((d2.getHours() + (d2.getDate() - 1) * 24) / self._domainType.hour.row(d2));
              }
              return Math.floor(d2.getHours() / self._domainType.hour.row(d2)) + (d2.getDate() - 1) * 4;
            } else if (self.options.domain === "week") {
              if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
                return Math.floor((d2.getHours() + self.getWeekDay(d2) * 24) / self._domainType.hour.row(d2));
              }
              return Math.floor(d2.getHours() / self._domainType.hour.row(d2)) + self.getWeekDay(d2) * 4;
            }
            return Math.floor(d2.getHours() / self._domainType.hour.row(d2));
          },
          y: function(d2) {
            var p = d2.getHours();
            if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
              switch (self.options.domain) {
                case "month":
                  p += (d2.getDate() - 1) * 24;
                  break;
                case "week":
                  p += self.getWeekDay(d2) * 24;
                  break;
              }
            }
            return Math.floor(p % self._domainType.hour.row(d2));
          }
        },
        format: {
          date: "%Hh, %A %B %-e, %Y",
          legend: "%H:00",
          connector: "at"
        },
        extractUnit: function(d2) {
          return new Date(d2.getFullYear(), d2.getMonth(), d2.getDate(), d2.getHours()).getTime();
        }
      },
      "day": {
        name: "day",
        level: 30,
        maxItemNumber: function(d2) {
          switch (self.options.domain) {
            case "week":
              return 7;
            case "month":
              return self.options.domainDynamicDimension ? self.getDayCountInMonth(d2) : 31;
            case "year":
              return self.options.domainDynamicDimension ? self.getDayCountInYear(d2) : 366;
          }
        },
        defaultColumnNumber: function(d2) {
          d2 = new Date(d2);
          switch (self.options.domain) {
            case "week":
              return 1;
            case "month":
              return self.options.domainDynamicDimension && !self.options.verticalOrientation ? self.getWeekNumber(new Date(d2.getFullYear(), d2.getMonth() + 1, 0)) - self.getWeekNumber(d2) + 1 : 6;
            case "year":
              return self.options.domainDynamicDimension ? self.getWeekNumber(new Date(d2.getFullYear(), 11, 31)) - self.getWeekNumber(new Date(d2.getFullYear(), 0)) + 1 : 54;
          }
        },
        defaultRowNumber: 7,
        row: function(d2) {
          return self.getSubDomainRowNumber(d2);
        },
        column: function(d2) {
          return self.getSubDomainColumnNumber(d2);
        },
        position: {
          x: function(d2) {
            switch (self.options.domain) {
              case "week":
                return Math.floor(self.getWeekDay(d2) / self._domainType.day.row(d2));
              case "month":
                if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
                  return Math.floor((d2.getDate() - 1) / self._domainType.day.row(d2));
                }
                return self.getWeekNumber(d2) - self.getWeekNumber(new Date(d2.getFullYear(), d2.getMonth()));
              case "year":
                if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
                  return Math.floor((self.getDayOfYear(d2) - 1) / self._domainType.day.row(d2));
                }
                return self.getWeekNumber(d2);
            }
          },
          y: function(d2) {
            var p = self.getWeekDay(d2);
            if (self.options.colLimit > 0 || self.options.rowLimit > 0) {
              switch (self.options.domain) {
                case "year":
                  p = self.getDayOfYear(d2) - 1;
                  break;
                case "week":
                  p = self.getWeekDay(d2);
                  break;
                case "month":
                  p = d2.getDate() - 1;
                  break;
              }
            }
            return Math.floor(p % self._domainType.day.row(d2));
          }
        },
        format: {
          date: "%A %B %-e, %Y",
          legend: "%e %b",
          connector: "on"
        },
        extractUnit: function(d2) {
          return new Date(d2.getFullYear(), d2.getMonth(), d2.getDate()).getTime();
        }
      },
      "week": {
        name: "week",
        level: 40,
        maxItemNumber: 54,
        defaultColumnNumber: function(d2) {
          d2 = new Date(d2);
          switch (self.options.domain) {
            case "year":
              return self._domainType.week.maxItemNumber;
            case "month":
              return self.options.domainDynamicDimension ? self.getWeekNumber(new Date(d2.getFullYear(), d2.getMonth() + 1, 0)) - self.getWeekNumber(d2) : 5;
          }
        },
        defaultRowNumber: 1,
        row: function(d2) {
          return self.getSubDomainRowNumber(d2);
        },
        column: function(d2) {
          return self.getSubDomainColumnNumber(d2);
        },
        position: {
          x: function(d2) {
            switch (self.options.domain) {
              case "year":
                return Math.floor(self.getWeekNumber(d2) / self._domainType.week.row(d2));
              case "month":
                return Math.floor(self.getMonthWeekNumber(d2) / self._domainType.week.row(d2));
            }
          },
          y: function(d2) {
            return self.getWeekNumber(d2) % self._domainType.week.row(d2);
          }
        },
        format: {
          date: "%B Week #%W",
          legend: "%B Week #%W",
          connector: "in"
        },
        extractUnit: function(d2) {
          var dt = new Date(d2.getFullYear(), d2.getMonth(), d2.getDate());
          var weekDay = dt.getDay() - (self.options.weekStartOnMonday ? 1 : 0);
          if (weekDay < 0) {
            weekDay = 6;
          }
          dt.setDate(dt.getDate() - weekDay);
          return dt.getTime();
        }
      },
      "month": {
        name: "month",
        level: 50,
        maxItemNumber: 12,
        defaultColumnNumber: 12,
        defaultRowNumber: 1,
        row: function() {
          return self.getSubDomainRowNumber();
        },
        column: function() {
          return self.getSubDomainColumnNumber();
        },
        position: {
          x: function(d2) {
            return Math.floor(d2.getMonth() / self._domainType.month.row(d2));
          },
          y: function(d2) {
            return d2.getMonth() % self._domainType.month.row(d2);
          }
        },
        format: {
          date: "%B %Y",
          legend: "%B",
          connector: "in"
        },
        extractUnit: function(d2) {
          return new Date(d2.getFullYear(), d2.getMonth()).getTime();
        }
      },
      "year": {
        name: "year",
        level: 60,
        row: function() {
          return self.options.rowLimit || 1;
        },
        column: function() {
          return self.options.colLimit || 1;
        },
        position: {
          x: function() {
            return 1;
          },
          y: function() {
            return 1;
          }
        },
        format: {
          date: "%Y",
          legend: "%Y",
          connector: "in"
        },
        extractUnit: function(d2) {
          return new Date(d2.getFullYear()).getTime();
        }
      }
    };
    for (var type in this._domainType) {
      if (this._domainType.hasOwnProperty(type)) {
        var d = this._domainType[type];
        this._domainType["x_" + type] = {
          name: "x_" + type,
          level: d.type,
          maxItemNumber: d.maxItemNumber,
          defaultRowNumber: d.defaultRowNumber,
          defaultColumnNumber: d.defaultColumnNumber,
          row: d.column,
          column: d.row,
          position: {
            x: d.position.y,
            y: d.position.x
          },
          format: d.format,
          extractUnit: d.extractUnit
        };
      }
    }
    this.lastInsertedSvg = null;
    this._completed = false;
    this._domains = d3.map();
    this.graphDim = {
      width: 0,
      height: 0
    };
    this.legendDim = {
      width: 0,
      height: 0
    };
    this.NAVIGATE_LEFT = 1;
    this.NAVIGATE_RIGHT = 2;
    this.RESET_ALL_ON_UPDATE = 0;
    this.RESET_SINGLE_ON_UPDATE = 1;
    this.APPEND_ON_UPDATE = 2;
    this.DEFAULT_LEGEND_MARGIN = 10;
    this.root = null;
    this.tooltip = null;
    this._maxDomainReached = false;
    this._minDomainReached = false;
    this.domainPosition = new DomainPosition();
    this.Legend = null;
    this.legendScale = null;
    this.DSTDomain = [];
    this._init = function() {
      self.getDomain(self.options.start).map(function(d2) {
        return d2.getTime();
      }).map(function(d2) {
        self._domains.set(d2, self.getSubDomain(d2).map(function(d4) {
          return { t: self._domainType[self.options.subDomain].extractUnit(d4), v: null };
        }));
      });
      self.root = d3.select(self.options.itemSelector).append("svg").attr("class", "cal-heatmap-container");
      self.tooltip = d3.select(self.options.itemSelector).attr("style", function() {
        var current = d3.select(self.options.itemSelector).attr("style");
        return (current !== null ? current : "") + "position:relative;";
      }).append("div").attr("class", "ch-tooltip");
      self.root.attr("x", 0).attr("y", 0).append("svg").attr("class", "graph");
      self.Legend = new Legend(self);
      if (self.options.paintOnLoad) {
        _initCalendar();
      }
      return true;
    };
    function _initCalendar() {
      self.verticalDomainLabel = self.options.label.position === "top" || self.options.label.position === "bottom";
      self.domainVerticalLabelHeight = self.options.label.height === null ? Math.max(25, self.options.cellSize * 2) : self.options.label.height;
      self.domainHorizontalLabelWidth = 0;
      if (self.options.domainLabelFormat === "" && self.options.label.height === null) {
        self.domainVerticalLabelHeight = 0;
      }
      if (!self.verticalDomainLabel) {
        self.domainVerticalLabelHeight = 0;
        self.domainHorizontalLabelWidth = self.options.label.width;
      }
      self.paint();
      if (self.options.nextSelector !== false) {
        d3.select(self.options.nextSelector).on("click." + self.options.itemNamespace, function() {
          d3.event.preventDefault();
          return self.loadNextDomain(1);
        });
      }
      if (self.options.previousSelector !== false) {
        d3.select(self.options.previousSelector).on("click." + self.options.itemNamespace, function() {
          d3.event.preventDefault();
          return self.loadPreviousDomain(1);
        });
      }
      self.Legend.redraw(self.graphDim.width - self.options.domainGutter - self.options.cellPadding);
      self.afterLoad();
      var domains = self.getDomainKeys();
      if (self.options.loadOnInit) {
        self.getDatas(
          self.options.data,
          new Date(domains[0]),
          self.getSubDomain(domains[domains.length - 1]).pop(),
          function() {
            self.fill();
            self.onComplete();
          }
        );
      } else {
        self.onComplete();
      }
      self.checkIfMinDomainIsReached(domains[0]);
      self.checkIfMaxDomainIsReached(self.getNextDomain().getTime());
    }
    function w(d2, outer) {
      var width = self.options.cellSize * self._domainType[self.options.subDomain].column(d2) + self.options.cellPadding * self._domainType[self.options.subDomain].column(d2);
      if (arguments.length === 2 && outer === true) {
        return width += self.domainHorizontalLabelWidth + self.options.domainGutter + self.options.domainMargin[1] + self.options.domainMargin[3];
      }
      return width;
    }
    function h(d2, outer) {
      var height = self.options.cellSize * self._domainType[self.options.subDomain].row(d2) + self.options.cellPadding * self._domainType[self.options.subDomain].row(d2);
      if (arguments.length === 2 && outer === true) {
        height += self.options.domainGutter + self.domainVerticalLabelHeight + self.options.domainMargin[0] + self.options.domainMargin[2];
      }
      return height;
    }
    this.paint = function(navigationDir) {
      var options = self.options;
      if (arguments.length === 0) {
        navigationDir = false;
      }
      var domainSvg = self.root.select(".graph").selectAll(".graph-domain").data(
        function() {
          var data = self.getDomainKeys();
          return navigationDir === self.NAVIGATE_LEFT ? data.reverse() : data;
        },
        function(d2) {
          return d2;
        }
      );
      var enteringDomainDim = 0;
      var exitingDomainDim = 0;
      if (options.dayLabel && options.domain === "month" && options.subDomain === "day") {
        var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
        if (options.weekStartOnMonday) {
          daysOfTheWeek.push("sunday");
        } else {
          daysOfTheWeek.shif("sunday");
        }
        var daysOfTheWeekAbbr = daysOfTheWeek.map(function(day) {
          return self.formatDate(d3.time[day](/* @__PURE__ */ new Date()), "%a").charAt(0);
        });
        this.root.selectAll(".day-name").remove();
        var dayLabelSvgGroup = this.root.append("svg").attr("class", "day-name").attr("x", 0).attr("y", 0);
        var dayLabelSvg = dayLabelSvgGroup.selectAll("g").data(daysOfTheWeekAbbr).enter().append("g");
        dayLabelSvg.append("rect").attr("class", "day-name-rect").attr("width", options.cellSize).attr("height", options.cellSize).attr("x", 0).attr("y", function(data, index) {
          return index * options.cellSize + index * options.cellPadding;
        });
        dayLabelSvg.append("text").attr("class", "day-name-text").attr("dominant-baseline", "central").attr("x", 0).attr("y", function(data, index) {
          return index * options.cellSize + index * options.cellPadding + options.cellSize / 2;
        }).text(function(data) {
          return data;
        });
      }
      var svg = domainSvg.enter().append("svg").attr("width", function(d2) {
        return w(d2, true);
      }).attr("height", function(d2) {
        return h(d2, true);
      }).attr("x", function(d2) {
        if (options.verticalOrientation) {
          self.graphDim.width = Math.max(self.graphDim.width, w(d2, true));
          return 0;
        } else {
          return getDomainPosition(d2, self.graphDim, "width", w(d2, true));
        }
      }).attr("y", function(d2) {
        if (options.verticalOrientation) {
          return getDomainPosition(d2, self.graphDim, "height", h(d2, true));
        } else {
          self.graphDim.height = Math.max(self.graphDim.height, h(d2, true));
          return 0;
        }
      }).attr("class", function(d2) {
        var classname = "graph-domain";
        var date = new Date(d2);
        switch (options.domain) {
          case "hour":
            classname += " h_" + date.getHours();
          /* falls through */
          case "day":
            classname += " d_" + date.getDate() + " dy_" + date.getDay();
          /* falls through */
          case "week":
            classname += " w_" + self.getWeekNumber(date);
          /* falls through */
          case "month":
            classname += " m_" + (date.getMonth() + 1);
          /* falls through */
          case "year":
            classname += " y_" + date.getFullYear();
        }
        return classname;
      });
      self.lastInsertedSvg = svg;
      function getDomainPosition(domainIndex, graphDim, axis, domainDim) {
        var tmp = 0;
        switch (navigationDir) {
          case false:
            tmp = graphDim[axis];
            graphDim[axis] += domainDim;
            self.domainPosition.setPosition(domainIndex, tmp);
            return tmp;
          case self.NAVIGATE_RIGHT:
            self.domainPosition.setPosition(domainIndex, graphDim[axis]);
            enteringDomainDim = domainDim;
            exitingDomainDim = self.domainPosition.getPositionFromIndex(1);
            self.domainPosition.shiftRightBy(exitingDomainDim);
            return graphDim[axis];
          case self.NAVIGATE_LEFT:
            tmp = -domainDim;
            enteringDomainDim = -tmp;
            exitingDomainDim = graphDim[axis] - self.domainPosition.getLast();
            self.domainPosition.setPosition(domainIndex, tmp);
            self.domainPosition.shiftLeftBy(enteringDomainDim);
            return tmp;
        }
      }
      svg.append("rect").attr("width", function(d2) {
        return w(d2, true) - options.domainGutter - options.cellPadding;
      }).attr("height", function(d2) {
        return h(d2, true) - options.domainGutter - options.cellPadding;
      }).attr("class", "domain-background");
      var subDomainSvgGroup = svg.append("svg").attr("x", function() {
        if (options.label.position === "left") {
          return self.domainHorizontalLabelWidth + options.domainMargin[3];
        } else {
          return options.domainMargin[3];
        }
      }).attr("y", function() {
        if (options.label.position === "top") {
          return self.domainVerticalLabelHeight + options.domainMargin[0];
        } else {
          return options.domainMargin[0];
        }
      }).attr("class", "graph-subdomain-group");
      var rect = subDomainSvgGroup.selectAll("g").data(function(d2) {
        return self._domains.get(d2);
      }).enter().append("g");
      rect.append("rect").attr("class", function(d2) {
        return "graph-rect" + self.getHighlightClassName(d2.t) + (options.onClick !== null ? " hover_cursor" : "");
      }).attr("width", options.cellSize).attr("height", options.cellSize).attr("x", function(d2) {
        return self.positionSubDomainX(d2.t);
      }).attr("y", function(d2) {
        return self.positionSubDomainY(d2.t);
      }).on("click", function(d2) {
        if (options.onClick !== null) {
          return self.onClick(new Date(d2.t), d2.v);
        }
      }).call(function(selection) {
        if (options.cellRadius > 0) {
          selection.attr("rx", options.cellRadius).attr("ry", options.cellRadius);
        }
        if (self.legendScale !== null && options.legendColors !== null && options.legendColors.hasOwnProperty("base")) {
          selection.attr("fill", options.legendColors.base);
        }
        if (options.tooltip) {
          selection.on("mouseover", function(d2) {
            var domainNode = this.parentNode.parentNode;
            self.tooltip.html(self.getSubDomainTitle(d2)).attr("style", "display: block;");
            var tooltipPositionX = self.positionSubDomainX(d2.t) - self.tooltip[0][0].offsetWidth / 2 + options.cellSize / 2;
            var tooltipPositionY = self.positionSubDomainY(d2.t) - self.tooltip[0][0].offsetHeight - options.cellSize / 2;
            tooltipPositionX += parseInt(domainNode.getAttribute("x"), 10);
            tooltipPositionY += parseInt(domainNode.getAttribute("y"), 10);
            tooltipPositionX += parseInt(self.root.select(".graph").attr("x"), 10);
            tooltipPositionY += parseInt(self.root.select(".graph").attr("y"), 10);
            tooltipPositionX += parseInt(domainNode.parentNode.getAttribute("x"), 10);
            tooltipPositionY += parseInt(domainNode.parentNode.getAttribute("y"), 10);
            self.tooltip.attr(
              "style",
              "display: block; left: " + tooltipPositionX + "px; top: " + tooltipPositionY + "px;"
            );
          });
          selection.on("mouseout", function() {
            self.tooltip.attr("style", "display:none").html("");
          });
        }
      });
      if (!options.tooltip) {
        rect.append("title").text(function(d2) {
          return self.formatDate(new Date(d2.t), options.subDomainDateFormat);
        });
      }
      if (options.domainLabelFormat !== "") {
        svg.append("text").attr("class", "graph-label").attr("y", function(d2) {
          var y = options.domainMargin[0];
          switch (options.label.position) {
            case "top":
              y += self.domainVerticalLabelHeight / 2;
              break;
            case "bottom":
              y += h(d2) + self.domainVerticalLabelHeight / 2;
          }
          return y + options.label.offset.y * (options.label.rotate === "right" && options.label.position === "right" || options.label.rotate === "left" && options.label.position === "left" ? -1 : 1);
        }).attr("x", function(d2) {
          var x = options.domainMargin[3];
          switch (options.label.position) {
            case "right":
              x += w(d2);
              break;
            case "bottom":
            case "top":
              x += w(d2) / 2;
          }
          if (options.label.align === "right") {
            return x + self.domainHorizontalLabelWidth - options.label.offset.x * (options.label.rotate === "right" ? -1 : 1);
          }
          return x + options.label.offset.x;
        }).attr("text-anchor", function() {
          switch (options.label.align) {
            case "start":
            case "left":
              return "start";
            case "end":
            case "right":
              return "end";
            default:
              return "middle";
          }
        }).attr("dominant-baseline", function() {
          return self.verticalDomainLabel ? "middle" : "top";
        }).text(function(d2) {
          return self.formatDate(new Date(d2), options.domainLabelFormat);
        }).call(domainRotate);
      }
      function domainRotate(selection) {
        switch (options.label.rotate) {
          case "right":
            selection.attr("transform", function(d2) {
              var s = "rotate(90), ";
              switch (options.label.position) {
                case "right":
                  s += "translate(-" + w(d2) + " , -" + w(d2) + ")";
                  break;
                case "left":
                  s += "translate(0, -" + self.domainHorizontalLabelWidth + ")";
                  break;
              }
              return s;
            });
            break;
          case "left":
            selection.attr("transform", function(d2) {
              var s = "rotate(270), ";
              switch (options.label.position) {
                case "right":
                  s += "translate(-" + (w(d2) + self.domainHorizontalLabelWidth) + " , " + w(d2) + ")";
                  break;
                case "left":
                  s += "translate(-" + self.domainHorizontalLabelWidth + " , " + self.domainHorizontalLabelWidth + ")";
                  break;
              }
              return s;
            });
            break;
        }
      }
      if (options.subDomainTextFormat !== null) {
        rect.append("text").attr("class", function(d2) {
          return "subdomain-text" + self.getHighlightClassName(d2.t);
        }).attr("x", function(d2) {
          return self.positionSubDomainX(d2.t) + options.cellSize / 2;
        }).attr("y", function(d2) {
          return self.positionSubDomainY(d2.t) + options.cellSize / 2;
        }).attr("text-anchor", "middle").attr("dominant-baseline", "central").text(function(d2) {
          return self.formatDate(new Date(d2.t), options.subDomainTextFormat);
        });
      }
      if (navigationDir !== false) {
        domainSvg.transition().duration(options.animationDuration).attr("x", function(d2) {
          return options.verticalOrientation ? 0 : self.domainPosition.getPosition(d2);
        }).attr("y", function(d2) {
          return options.verticalOrientation ? self.domainPosition.getPosition(d2) : 0;
        });
      }
      var tempWidth = self.graphDim.width;
      var tempHeight = self.graphDim.height;
      if (options.verticalOrientation) {
        self.graphDim.height += enteringDomainDim - exitingDomainDim;
      } else {
        self.graphDim.width += enteringDomainDim - exitingDomainDim;
      }
      domainSvg.exit().transition().duration(options.animationDuration).attr("x", function(d2) {
        if (options.verticalOrientation) {
          return 0;
        } else {
          switch (navigationDir) {
            case self.NAVIGATE_LEFT:
              return Math.min(self.graphDim.width, tempWidth);
            case self.NAVIGATE_RIGHT:
              return -w(d2, true);
          }
        }
      }).attr("y", function(d2) {
        if (options.verticalOrientation) {
          switch (navigationDir) {
            case self.NAVIGATE_LEFT:
              return Math.min(self.graphDim.height, tempHeight);
            case self.NAVIGATE_RIGHT:
              return -h(d2, true);
          }
        } else {
          return 0;
        }
      }).remove();
      self.resize();
    };
  };
  CalHeatMap.prototype = {
    /**
     * Validate and merge user settings with default settings
     *
     * @param  {object} settings User settings
     * @return {bool} False if settings contains error
     */
    /* jshint maxstatements:false */
    init: function(settings) {
      "use strict";
      var parent = this;
      var options = parent.options = mergeRecursive(parent.options, settings);
      validateDomainType();
      validateSelector(options.itemSelector, false, "itemSelector");
      if (parent.allowedDataType.indexOf(options.dataType) === -1) {
        throw new Error("The data type '" + options.dataType + "' is not valid data type");
      }
      if (d3.select(options.itemSelector)[0][0] === null) {
        throw new Error("The node '" + options.itemSelector + "' specified in itemSelector does not exist");
      }
      try {
        validateSelector(options.nextSelector, true, "nextSelector");
        validateSelector(options.previousSelector, true, "previousSelector");
      } catch (error) {
        console.log(error.message);
        return false;
      }
      if (!settings.hasOwnProperty("subDomain")) {
        this.options.subDomain = getOptimalSubDomain(settings.domain);
      }
      if (typeof options.itemNamespace !== "string" || options.itemNamespace === "") {
        console.log("itemNamespace can not be empty, falling back to cal-heatmap");
        options.itemNamespace = "cal-heatmap";
      }
      var s = ["data", "onComplete", "onClick", "afterLoad", "afterLoadData", "afterLoadPreviousDomain", "afterLoadNextDomain", "afterUpdate"];
      for (var k in s) {
        if (settings.hasOwnProperty(s[k])) {
          options[s[k]] = settings[s[k]];
        }
      }
      options.subDomainDateFormat = typeof options.subDomainDateFormat === "string" || typeof options.subDomainDateFormat === "function" ? options.subDomainDateFormat : this._domainType[options.subDomain].format.date;
      options.domainLabelFormat = typeof options.domainLabelFormat === "string" || typeof options.domainLabelFormat === "function" ? options.domainLabelFormat : this._domainType[options.domain].format.legend;
      options.subDomainTextFormat = typeof options.subDomainTextFormat === "string" && options.subDomainTextFormat !== "" || typeof options.subDomainTextFormat === "function" ? options.subDomainTextFormat : null;
      options.domainMargin = expandMarginSetting(options.domainMargin);
      options.legendMargin = expandMarginSetting(options.legendMargin);
      options.highlight = parent.expandDateSetting(options.highlight);
      options.itemName = expandItemName(options.itemName);
      options.colLimit = parseColLimit(options.colLimit);
      options.rowLimit = parseRowLimit(options.rowLimit);
      if (!settings.hasOwnProperty("legendMargin")) {
        autoAddLegendMargin();
      }
      autoAlignLabel();
      function validateSelector(selector, canBeFalse, name) {
        if ((canBeFalse && selector === false || selector instanceof Element || typeof selector === "string") && selector !== "") {
          return true;
        }
        throw new Error("The " + name + " is not valid");
      }
      function getOptimalSubDomain(domain) {
        switch (domain) {
          case "year":
            return "month";
          case "month":
            return "day";
          case "week":
            return "day";
          case "day":
            return "hour";
          default:
            return "min";
        }
      }
      function validateDomainType() {
        if (!parent._domainType.hasOwnProperty(options.domain) || options.domain === "min" || options.domain.substring(0, 2) === "x_") {
          throw new Error("The domain '" + options.domain + "' is not valid");
        }
        if (!parent._domainType.hasOwnProperty(options.subDomain) || options.subDomain === "year") {
          throw new Error("The subDomain '" + options.subDomain + "' is not valid");
        }
        if (parent._domainType[options.domain].level <= parent._domainType[options.subDomain].level) {
          throw new Error("'" + options.subDomain + "' is not a valid subDomain to '" + options.domain + "'");
        }
        return true;
      }
      function autoAlignLabel() {
        if (!settings.hasOwnProperty("label") || settings.hasOwnProperty("label") && !settings.label.hasOwnProperty("align")) {
          switch (options.label.position) {
            case "left":
              options.label.align = "right";
              break;
            case "right":
              options.label.align = "left";
              break;
            default:
              options.label.align = "center";
          }
          if (options.label.rotate === "left") {
            options.label.align = "right";
          } else if (options.label.rotate === "right") {
            options.label.align = "left";
          }
        }
        if (!settings.hasOwnProperty("label") || settings.hasOwnProperty("label") && !settings.label.hasOwnProperty("offset")) {
          if (options.label.position === "left" || options.label.position === "right") {
            options.label.offset = {
              x: 10,
              y: 15
            };
          }
        }
      }
      function autoAddLegendMargin() {
        switch (options.legendVerticalPosition) {
          case "top":
            options.legendMargin[2] = parent.DEFAULT_LEGEND_MARGIN;
            break;
          case "bottom":
            options.legendMargin[0] = parent.DEFAULT_LEGEND_MARGIN;
            break;
          case "middle":
          case "center":
            options.legendMargin[options.legendHorizontalPosition === "right" ? 3 : 1] = parent.DEFAULT_LEGEND_MARGIN;
        }
      }
      function expandMarginSetting(value) {
        if (typeof value === "number") {
          value = [value];
        }
        if (!Array.isArray(value)) {
          console.log("Margin only takes an integer or an array of integers");
          value = [0];
        }
        switch (value.length) {
          case 1:
            return [value[0], value[0], value[0], value[0]];
          case 2:
            return [value[0], value[1], value[0], value[1]];
          case 3:
            return [value[0], value[1], value[2], value[1]];
          case 4:
            return value;
          default:
            return value.slice(0, 4);
        }
      }
      function expandItemName(value) {
        if (typeof value === "string") {
          return [value, value + (value !== "" ? "s" : "")];
        }
        if (Array.isArray(value)) {
          if (value.length === 1) {
            return [value[0], value[0] + "s"];
          } else if (value.length > 2) {
            return value.slice(0, 2);
          }
          return value;
        }
        return ["item", "items"];
      }
      function parseColLimit(value) {
        return value > 0 ? value : null;
      }
      function parseRowLimit(value) {
        if (value > 0 && options.colLimit > 0) {
          console.log("colLimit and rowLimit are mutually exclusive, rowLimit will be ignored");
          return null;
        }
        return value > 0 ? value : null;
      }
      return this._init();
    },
    /**
     * Convert a keyword or an array of keyword/date to an array of date objects
     *
     * @param  {string|array|Date} value Data to convert
     * @return {array}       An array of Dates
     */
    expandDateSetting: function(value) {
      "use strict";
      if (!Array.isArray(value)) {
        value = [value];
      }
      return value.map(function(data) {
        if (data === "now") {
          return /* @__PURE__ */ new Date();
        }
        if (data instanceof Date) {
          return data;
        }
        return false;
      }).filter(function(d) {
        return d !== false;
      });
    },
    /**
     * Fill the calendar by coloring the cells
     *
     * @param array svg An array of html node to apply the transformation to (optional)
     *                  It's used to limit the painting to only a subset of the calendar
     * @return void
     */
    fill: function(svg) {
      "use strict";
      var parent = this;
      var options = parent.options;
      if (arguments.length === 0) {
        svg = parent.root.selectAll(".graph-domain");
      }
      var rect = svg.selectAll("svg").selectAll("g").data(function(d) {
        return parent._domains.get(d);
      });
      function addStyle(element) {
        if (parent.legendScale === null) {
          return false;
        }
        element.attr("fill", function(d) {
          if (d.v === null && (options.hasOwnProperty("considerMissingDataAsZero") && !options.considerMissingDataAsZero)) {
            if (options.legendColors.hasOwnProperty("base")) {
              return options.legendColors.base;
            }
          }
          if (options.legendColors !== null && options.legendColors.hasOwnProperty("empty") && (d.v === 0 || d.v === null && options.hasOwnProperty("considerMissingDataAsZero") && options.considerMissingDataAsZero)) {
            return options.legendColors.empty;
          }
          if (d.v < 0 && options.legend[0] > 0 && options.legendColors !== null && options.legendColors.hasOwnProperty("overflow")) {
            return options.legendColors.overflow;
          }
          return parent.legendScale(Math.min(d.v, options.legend[options.legend.length - 1]));
        });
      }
      rect.transition().duration(options.animationDuration).select("rect").attr("class", function(d) {
        var htmlClass = parent.getHighlightClassName(d.t).trim().split(" ");
        var pastDate = parent.dateIsLessThan(d.t, /* @__PURE__ */ new Date());
        var sameDate = parent.dateIsEqual(d.t, /* @__PURE__ */ new Date());
        if (parent.legendScale === null || d.v === null && (options.hasOwnProperty("considerMissingDataAsZero") && !options.considerMissingDataAsZero) && !options.legendColors.hasOwnProperty("base")) {
          htmlClass.push("graph-rect");
        }
        if (sameDate) {
          htmlClass.push("now");
        } else if (!pastDate) {
          htmlClass.push("future");
        }
        if (d.v !== null) {
          htmlClass.push(parent.Legend.getClass(d.v, parent.legendScale === null));
        } else if (options.considerMissingDataAsZero && pastDate) {
          htmlClass.push(parent.Legend.getClass(0, parent.legendScale === null));
        }
        if (options.onClick !== null) {
          htmlClass.push("hover_cursor");
        }
        return htmlClass.join(" ");
      }).call(addStyle);
      rect.transition().duration(options.animationDuration).select("title").text(function(d) {
        return parent.getSubDomainTitle(d);
      });
      function formatSubDomainText(element) {
        if (typeof options.subDomainTextFormat === "function") {
          element.text(function(d) {
            return options.subDomainTextFormat(d.t, d.v);
          });
        }
      }
      rect.transition().duration(options.animationDuration).select("text").attr("class", function(d) {
        return "subdomain-text" + parent.getHighlightClassName(d.t);
      }).call(formatSubDomainText);
    },
    /**
     * Sprintf like function.
     * Replaces placeholders {0} in string with values from provided object.
     *
     * @param string formatted String containing placeholders.
     * @param object args Object with properties to replace placeholders in string.
     *
     * @return String
     */
    formatStringWithObject: function(formatted, args) {
      "use strict";
      for (var prop in args) {
        if (args.hasOwnProperty(prop)) {
          var regexp = new RegExp("\\{" + prop + "\\}", "gi");
          formatted = formatted.replace(regexp, args[prop]);
        }
      }
      return formatted;
    },
    // =========================================================================//
    // EVENTS CALLBACK															//
    // =========================================================================//
    /**
     * Helper method for triggering event callback
     *
     * @param  string	eventName       Name of the event to trigger
     * @param  array	successArgs     List of argument to pass to the callback
     * @param  boolean  skip			Whether to skip the event triggering
     * @return mixed	True when the triggering was skipped, false on error, else the callback function
     */
    triggerEvent: function(eventName, successArgs, skip) {
      "use strict";
      if (arguments.length === 3 && skip || this.options[eventName] === null) {
        return true;
      }
      if (typeof this.options[eventName] === "function") {
        if (typeof successArgs === "function") {
          successArgs = successArgs();
        }
        return this.options[eventName].apply(this, successArgs);
      } else {
        console.log("Provided callback for " + eventName + " is not a function.");
        return false;
      }
    },
    /**
     * Event triggered on a mouse click on a subDomain cell
     *
     * @param  Date		d		Date of the subdomain block
     * @param  int		itemNb	Number of items in that date
     */
    onClick: function(d, itemNb) {
      "use strict";
      return this.triggerEvent("onClick", [d, itemNb]);
    },
    /**
     * Event triggered after drawing the calendar, byt before filling it with data
     */
    afterLoad: function() {
      "use strict";
      return this.triggerEvent("afterLoad");
    },
    /**
     * Event triggered after completing drawing and filling the calendar
     */
    onComplete: function() {
      "use strict";
      var response = this.triggerEvent("onComplete", [], this._completed);
      this._completed = true;
      return response;
    },
    /**
     * Event triggered after shifting the calendar one domain back
     *
     * @param  Date		start	Domain start date
     * @param  Date		end		Domain end date
     */
    afterLoadPreviousDomain: function(start) {
      "use strict";
      var parent = this;
      return this.triggerEvent("afterLoadPreviousDomain", function() {
        var subDomain = parent.getSubDomain(start);
        return [subDomain.shift(), subDomain.pop()];
      });
    },
    /**
     * Event triggered after shifting the calendar one domain above
     *
     * @param  Date		start	Domain start date
     * @param  Date		end		Domain end date
     */
    afterLoadNextDomain: function(start) {
      "use strict";
      var parent = this;
      return this.triggerEvent("afterLoadNextDomain", function() {
        var subDomain = parent.getSubDomain(start);
        return [subDomain.shift(), subDomain.pop()];
      });
    },
    /**
     * Event triggered after loading the leftmost domain allowed by minDate
     *
     * @param  boolean  reached True if the leftmost domain was reached
     */
    onMinDomainReached: function(reached) {
      "use strict";
      this._minDomainReached = reached;
      return this.triggerEvent("onMinDomainReached", [reached]);
    },
    /**
     * Event triggered after loading the rightmost domain allowed by maxDate
     *
     * @param  boolean  reached True if the rightmost domain was reached
     */
    onMaxDomainReached: function(reached) {
      "use strict";
      this._maxDomainReached = reached;
      return this.triggerEvent("onMaxDomainReached", [reached]);
    },
    checkIfMinDomainIsReached: function(date, upperBound) {
      "use strict";
      if (this.minDomainIsReached(date)) {
        this.onMinDomainReached(true);
      }
      if (arguments.length === 2) {
        if (this._maxDomainReached && !this.maxDomainIsReached(upperBound)) {
          this.onMaxDomainReached(false);
        }
      }
    },
    checkIfMaxDomainIsReached: function(date, lowerBound) {
      "use strict";
      if (this.maxDomainIsReached(date)) {
        this.onMaxDomainReached(true);
      }
      if (arguments.length === 2) {
        if (this._minDomainReached && !this.minDomainIsReached(lowerBound)) {
          this.onMinDomainReached(false);
        }
      }
    },
    afterUpdate: function() {
      "use strict";
      return this.triggerEvent("afterUpdate");
    },
    // =========================================================================//
    // FORMATTER																//
    // =========================================================================//
    formatNumber: d3.format(".2f"),
    formatDate: function(d, format) {
      "use strict";
      if (arguments.length < 2) {
        format = "title";
      }
      if (typeof format === "function") {
        return format(d);
      } else {
        var f = d3.time.format(format);
        return f(d);
      }
    },
    getSubDomainTitle: function(d) {
      "use strict";
      if (d.v === null && !this.options.considerMissingDataAsZero) {
        var emptyObject = {
          date: this.formatDate(new Date(d.t), this.options.subDomainDateFormat)
        };
        if (typeof this.options.subDomainTitleFormat === "function") {
          return this.options.subDomainTitleFormat(true, emptyObject, d);
        } else {
          return this.formatStringWithObject(this.options.subDomainTitleFormat.empty, emptyObject);
        }
      } else {
        var value = d.v;
        if (value === null && this.options.considerMissingDataAsZero) {
          value = 0;
        }
        var object = {
          count: this.formatNumber(value),
          name: this.options.itemName[value !== 1 ? 1 : 0],
          connector: this._domainType[this.options.subDomain].format.connector,
          date: this.formatDate(new Date(d.t), this.options.subDomainDateFormat)
        };
        if (typeof this.options.subDomainTitleFormat === "function") {
          return this.options.subDomainTitleFormat(false, object, d);
        } else {
          return this.formatStringWithObject(this.options.subDomainTitleFormat.filled, object);
        }
      }
    },
    // =========================================================================//
    // DOMAIN NAVIGATION														//
    // =========================================================================//
    /**
     * Shift the calendar one domain forward
     *
     * The new domain is loaded only if it's not beyond maxDate
     *
     * @param int n Number of domains to load
     * @return bool True if the next domain was loaded, else false
     */
    loadNextDomain: function(n) {
      "use strict";
      if (this._maxDomainReached || n === 0) {
        return false;
      }
      var bound = this.loadNewDomains(this.NAVIGATE_RIGHT, this.getDomain(this.getNextDomain(), n));
      this.afterLoadNextDomain(bound.end);
      this.checkIfMaxDomainIsReached(this.getNextDomain().getTime(), bound.start);
      return true;
    },
    /**
     * Shift the calendar one domain backward
     *
     * The previous domain is loaded only if it's not beyond the minDate
     *
     * @param int n Number of domains to load
     * @return bool True if the previous domain was loaded, else false
     */
    loadPreviousDomain: function(n) {
      "use strict";
      if (this._minDomainReached || n === 0) {
        return false;
      }
      var bound = this.loadNewDomains(this.NAVIGATE_LEFT, this.getDomain(this.getDomainKeys()[0], -n).reverse());
      this.afterLoadPreviousDomain(bound.start);
      this.checkIfMinDomainIsReached(bound.start, bound.end);
      return true;
    },
    loadNewDomains: function(direction, newDomains) {
      "use strict";
      var parent = this;
      var backward = direction === this.NAVIGATE_LEFT;
      var i = -1;
      var total = newDomains.length;
      var domains = this.getDomainKeys();
      function buildSubDomain(d) {
        return { t: parent._domainType[parent.options.subDomain].extractUnit(d), v: null };
      }
      while (++i < total) {
        if (backward && this.minDomainIsReached(newDomains[i])) {
          newDomains = newDomains.slice(0, i + 1);
          break;
        }
        if (!backward && this.maxDomainIsReached(newDomains[i])) {
          newDomains = newDomains.slice(0, i);
          break;
        }
      }
      newDomains = newDomains.slice(-this.options.range);
      for (i = 0, total = newDomains.length; i < total; i++) {
        this._domains.set(
          newDomains[i].getTime(),
          this.getSubDomain(newDomains[i]).map(buildSubDomain)
        );
        this._domains.remove(backward ? domains.pop() : domains.shift());
      }
      domains = this.getDomainKeys();
      if (backward) {
        newDomains = newDomains.reverse();
      }
      this.paint(direction);
      this.getDatas(
        this.options.data,
        newDomains[0],
        this.getSubDomain(newDomains[newDomains.length - 1]).pop(),
        function() {
          parent.fill(parent.lastInsertedSvg);
        }
      );
      return {
        start: newDomains[backward ? 0 : 1],
        end: domains[domains.length - 1]
      };
    },
    /**
     * Return whether a date is inside the scope determined by maxDate
     *
     * @param int datetimestamp The timestamp in ms to test
     * @return bool True if the specified date correspond to the calendar upper bound
     */
    maxDomainIsReached: function(datetimestamp) {
      "use strict";
      return this.options.maxDate !== null && this.options.maxDate.getTime() < datetimestamp;
    },
    /**
     * Return whether a date is inside the scope determined by minDate
     *
     * @param int datetimestamp The timestamp in ms to test
     * @return bool True if the specified date correspond to the calendar lower bound
     */
    minDomainIsReached: function(datetimestamp) {
      "use strict";
      return this.options.minDate !== null && this.options.minDate.getTime() >= datetimestamp;
    },
    /**
     * Return the list of the calendar's domain timestamp
     *
     * @return Array a sorted array of timestamp
     */
    getDomainKeys: function() {
      "use strict";
      return this._domains.keys().map(function(d) {
        return parseInt(d, 10);
      }).sort(function(a, b) {
        return a - b;
      });
    },
    // =========================================================================//
    // POSITIONNING																//
    // =========================================================================//
    positionSubDomainX: function(d) {
      "use strict";
      var index = this._domainType[this.options.subDomain].position.x(new Date(d));
      return index * this.options.cellSize + index * this.options.cellPadding;
    },
    positionSubDomainY: function(d) {
      "use strict";
      var index = this._domainType[this.options.subDomain].position.y(new Date(d));
      return index * this.options.cellSize + index * this.options.cellPadding;
    },
    getSubDomainColumnNumber: function(d) {
      "use strict";
      if (this.options.rowLimit > 0) {
        var i = this._domainType[this.options.subDomain].maxItemNumber;
        if (typeof i === "function") {
          i = i(d);
        }
        return Math.ceil(i / this.options.rowLimit);
      }
      var j = this._domainType[this.options.subDomain].defaultColumnNumber;
      if (typeof j === "function") {
        j = j(d);
      }
      return this.options.colLimit || j;
    },
    getSubDomainRowNumber: function(d) {
      "use strict";
      if (this.options.colLimit > 0) {
        var i = this._domainType[this.options.subDomain].maxItemNumber;
        if (typeof i === "function") {
          i = i(d);
        }
        return Math.ceil(i / this.options.colLimit);
      }
      var j = this._domainType[this.options.subDomain].defaultRowNumber;
      if (typeof j === "function") {
        j = j(d);
      }
      return this.options.rowLimit || j;
    },
    /**
     * Return a classname if the specified date should be highlighted
     *
     * @param  timestamp date Date of the current subDomain
     * @return String the highlight class
     */
    getHighlightClassName: function(d) {
      "use strict";
      d = new Date(d);
      if (this.options.highlight.length > 0) {
        for (var i in this.options.highlight) {
          if (this.dateIsEqual(this.options.highlight[i], d)) {
            return this.isNow(this.options.highlight[i]) ? " highlight-now" : " highlight";
          }
        }
      }
      return "";
    },
    /**
     * Return whether the specified date is now,
     * according to the type of subdomain
     *
     * @param  Date d The date to compare
     * @return bool True if the date correspond to a subdomain cell
     */
    isNow: function(d) {
      "use strict";
      return this.dateIsEqual(d, this.options.today);
    },
    /**
     * Return whether 2 dates are equals
     * This function is subdomain-aware,
     * and dates comparison are dependent of the subdomain
     *
     * @param  Date dateA First date to compare
     * @param  Date dateB Secon date to compare
     * @return bool true if the 2 dates are equals
     */
    /* jshint maxcomplexity: false */
    dateIsEqual: function(dateA, dateB) {
      "use strict";
      if (!(dateA instanceof Date)) {
        dateA = new Date(dateA);
      }
      if (!(dateB instanceof Date)) {
        dateB = new Date(dateB);
      }
      switch (this.options.subDomain) {
        case "x_min":
        case "min":
          return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate() && dateA.getHours() === dateB.getHours() && dateA.getMinutes() === dateB.getMinutes();
        case "x_hour":
        case "hour":
          return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate() && dateA.getHours() === dateB.getHours();
        case "x_day":
        case "day":
          return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth() && dateA.getDate() === dateB.getDate();
        case "x_week":
        case "week":
          return dateA.getFullYear() === dateB.getFullYear() && this.getWeekNumber(dateA) === this.getWeekNumber(dateB);
        case "x_month":
        case "month":
          return dateA.getFullYear() === dateB.getFullYear() && dateA.getMonth() === dateB.getMonth();
        default:
          return false;
      }
    },
    /**
     * Returns wether or not dateA is less than or equal to dateB. This function is subdomain aware.
     * Performs automatic conversion of values.
     * @param dateA may be a number or a Date
     * @param dateB may be a number or a Date
     * @returns {boolean}
     */
    dateIsLessThan: function(dateA, dateB) {
      "use strict";
      if (!(dateA instanceof Date)) {
        dateA = new Date(dateA);
      }
      if (!(dateB instanceof Date)) {
        dateB = new Date(dateB);
      }
      function normalizedMillis(date, subdomain) {
        switch (subdomain) {
          case "x_min":
          case "min":
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes()).getTime();
          case "x_hour":
          case "hour":
            return new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours()).getTime();
          case "x_day":
          case "day":
            return new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
          case "x_week":
          case "week":
          case "x_month":
          case "month":
            return new Date(date.getFullYear(), date.getMonth()).getTime();
          default:
            return date.getTime();
        }
      }
      return normalizedMillis(dateA, this.options.subDomain) < normalizedMillis(dateB, this.options.subDomain);
    },
    // =========================================================================//
    // DATE COMPUTATION															//
    // =========================================================================//
    /**
     * Return the day of the year for the date
     * @param	Date
     * @return  int Day of the year [1,366]
     */
    getDayOfYear: d3.time.format("%j"),
    /**
     * Return the week number of the year
     * Monday as the first day of the week
     * @return int	Week number [0-53]
     */
    getWeekNumber: function(d) {
      "use strict";
      var f = this.options.weekStartOnMonday === true ? d3.time.format("%W") : d3.time.format("%U");
      return f(d);
    },
    /**
     * Return the week number, relative to its month
     *
     * @param  int|Date d Date or timestamp in milliseconds
     * @return int Week number, relative to the month [0-5]
     */
    getMonthWeekNumber: function(d) {
      "use strict";
      if (typeof d === "number") {
        d = new Date(d);
      }
      var monthFirstWeekNumber = this.getWeekNumber(new Date(d.getFullYear(), d.getMonth()));
      return this.getWeekNumber(d) - monthFirstWeekNumber - 1;
    },
    /**
     * Return the number of weeks in the dates' year
     *
     * @param  int|Date d Date or timestamp in milliseconds
     * @return int Number of weeks in the date's year
     */
    getWeekNumberInYear: function(d) {
      "use strict";
      if (typeof d === "number") {
        d = new Date(d);
      }
    },
    /**
     * Return the number of days in the date's month
     *
     * @param  int|Date d Date or timestamp in milliseconds
     * @return int Number of days in the date's month
     */
    getDayCountInMonth: function(d) {
      "use strict";
      return this.getEndOfMonth(d).getDate();
    },
    /**
     * Return the number of days in the date's year
     *
     * @param  int|Date d Date or timestamp in milliseconds
     * @return int Number of days in the date's year
     */
    getDayCountInYear: function(d) {
      "use strict";
      if (typeof d === "number") {
        d = new Date(d);
      }
      return new Date(d.getFullYear(), 1, 29).getMonth() === 1 ? 366 : 365;
    },
    /**
     * Get the weekday from a date
     *
     * Return the week day number (0-6) of a date,
     * depending on whether the week start on monday or sunday
     *
     * @param  Date d
     * @return int The week day number (0-6)
     */
    getWeekDay: function(d) {
      "use strict";
      if (this.options.weekStartOnMonday === false) {
        return d.getDay();
      }
      return d.getDay() === 0 ? 6 : d.getDay() - 1;
    },
    /**
     * Get the last day of the month
     * @param  Date|int	d	Date or timestamp in milliseconds
     * @return Date			Last day of the month
     */
    getEndOfMonth: function(d) {
      "use strict";
      if (typeof d === "number") {
        d = new Date(d);
      }
      return new Date(d.getFullYear(), d.getMonth() + 1, 0);
    },
    /**
     *
     * @param  Date date
     * @param  int count
     * @param  string step
     * @return Date
     */
    jumpDate: function(date, count, step) {
      "use strict";
      var d = new Date(date);
      switch (step) {
        case "hour":
          d.setHours(d.getHours() + count);
          break;
        case "day":
          d.setHours(d.getHours() + count * 24);
          break;
        case "week":
          d.setHours(d.getHours() + count * 24 * 7);
          break;
        case "month":
          d.setMonth(d.getMonth() + count);
          break;
        case "year":
          d.setFullYear(d.getFullYear() + count);
      }
      return new Date(d);
    },
    // =========================================================================//
    // DOMAIN COMPUTATION														//
    // =========================================================================//
    /**
     * Return all the minutes between 2 dates
     *
     * @param  Date	d	date	A date
     * @param  int|date	range	Number of minutes in the range, or a stop date
     * @return array	An array of minutes
     */
    getMinuteDomain: function(d, range) {
      "use strict";
      var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
      var stop = null;
      if (range instanceof Date) {
        stop = new Date(range.getFullYear(), range.getMonth(), range.getDate(), range.getHours());
      } else {
        stop = new Date(+start + range * 1e3 * 60);
      }
      return d3.time.minutes(Math.min(start, stop), Math.max(start, stop));
    },
    /**
     * Return all the hours between 2 dates
     *
     * @param  Date	d	A date
     * @param  int|date	range	Number of hours in the range, or a stop date
     * @return array	An array of hours
     */
    getHourDomain: function(d, range) {
      "use strict";
      var start = new Date(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours());
      var stop = null;
      if (range instanceof Date) {
        stop = new Date(range.getFullYear(), range.getMonth(), range.getDate(), range.getHours());
      } else {
        stop = new Date(start);
        stop.setHours(stop.getHours() + range);
      }
      var domains = d3.time.hours(Math.min(start, stop), Math.max(start, stop));
      var i = 0;
      var total = domains.length;
      for (i = 0; i < total; i++) {
        if (i > 0 && domains[i].getHours() === domains[i - 1].getHours()) {
          this.DSTDomain.push(domains[i].getTime());
          domains.splice(i, 1);
          break;
        }
      }
      if (typeof range === "number" && domains.length > Math.abs(range)) {
        domains.splice(domains.length - 1, 1);
      }
      return domains;
    },
    /**
     * Return all the days between 2 dates
     *
     * @param  Date		d		A date
     * @param  int|date	range	Number of days in the range, or a stop date
     * @return array	An array of weeks
     */
    getDayDomain: function(d, range) {
      "use strict";
      var start = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      var stop = null;
      if (range instanceof Date) {
        stop = new Date(range.getFullYear(), range.getMonth(), range.getDate());
      } else {
        stop = new Date(start);
        stop = new Date(stop.setDate(stop.getDate() + parseInt(range, 10)));
      }
      return d3.time.days(Math.min(start, stop), Math.max(start, stop));
    },
    /**
     * Return all the weeks between 2 dates
     *
     * @param  Date	d	A date
     * @param  int|date	range	Number of minutes in the range, or a stop date
     * @return array	An array of weeks
     */
    getWeekDomain: function(d, range) {
      "use strict";
      var weekStart;
      if (this.options.weekStartOnMonday === false) {
        weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay());
      } else {
        if (d.getDay() === 1) {
          weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
        } else if (d.getDay() === 0) {
          weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate());
          weekStart.setDate(weekStart.getDate() - 6);
        } else {
          weekStart = new Date(d.getFullYear(), d.getMonth(), d.getDate() - d.getDay() + 1);
        }
      }
      var endDate = new Date(weekStart);
      var stop = range;
      if (typeof range !== "object") {
        stop = new Date(endDate.setDate(endDate.getDate() + range * 7));
      }
      return this.options.weekStartOnMonday === true ? d3.time.mondays(Math.min(weekStart, stop), Math.max(weekStart, stop)) : d3.time.sundays(Math.min(weekStart, stop), Math.max(weekStart, stop));
    },
    /**
     * Return all the months between 2 dates
     *
     * @param  Date		d		A date
     * @param  int|date	range	Number of months in the range, or a stop date
     * @return array	An array of months
     */
    getMonthDomain: function(d, range) {
      "use strict";
      var start = new Date(d.getFullYear(), d.getMonth());
      var stop = null;
      if (range instanceof Date) {
        stop = new Date(range.getFullYear(), range.getMonth());
      } else {
        stop = new Date(start);
        stop = stop.setMonth(stop.getMonth() + range);
      }
      return d3.time.months(Math.min(start, stop), Math.max(start, stop));
    },
    /**
     * Return all the years between 2 dates
     *
     * @param  Date	d	date	A date
     * @param  int|date	range	Number of minutes in the range, or a stop date
     * @return array	An array of hours
     */
    getYearDomain: function(d, range) {
      "use strict";
      var start = new Date(d.getFullYear(), 0);
      var stop = null;
      if (range instanceof Date) {
        stop = new Date(range.getFullYear(), 0);
      } else {
        stop = new Date(d.getFullYear() + range, 0);
      }
      return d3.time.years(Math.min(start, stop), Math.max(start, stop));
    },
    /**
     * Get an array of domain start dates
     *
     * @param  int|Date date A random date included in the wanted domain
     * @param  int|Date range Number of dates to get, or a stop date
     * @return Array of dates
     */
    getDomain: function(date, range) {
      "use strict";
      if (typeof date === "number") {
        date = new Date(date);
      }
      if (arguments.length < 2) {
        range = this.options.range;
      }
      switch (this.options.domain) {
        case "hour":
          var domains = this.getHourDomain(date, range);
          if (typeof range === "number" && domains.length < range) {
            if (range > 0) {
              domains.push(this.getHourDomain(domains[domains.length - 1], 2)[1]);
            } else {
              domains.shift(this.getHourDomain(domains[0], -2)[0]);
            }
          }
          return domains;
        case "day":
          return this.getDayDomain(date, range);
        case "week":
          return this.getWeekDomain(date, range);
        case "month":
          return this.getMonthDomain(date, range);
        case "year":
          return this.getYearDomain(date, range);
      }
    },
    /* jshint maxcomplexity: false */
    getSubDomain: function(date) {
      "use strict";
      if (typeof date === "number") {
        date = new Date(date);
      }
      var parent = this;
      var computeDaySubDomainSize = function(date2, domain) {
        switch (domain) {
          case "year":
            return parent.getDayCountInYear(date2);
          case "month":
            return parent.getDayCountInMonth(date2);
          case "week":
            return 7;
        }
      };
      var computeMinSubDomainSize = function(date2, domain) {
        switch (domain) {
          case "hour":
            return 60;
          case "day":
            return 60 * 24;
          case "week":
            return 60 * 24 * 7;
        }
      };
      var computeHourSubDomainSize = function(date2, domain) {
        switch (domain) {
          case "day":
            return 24;
          case "week":
            return 168;
          case "month":
            return parent.getDayCountInMonth(date2) * 24;
        }
      };
      var computeWeekSubDomainSize = function(date2, domain) {
        if (domain === "month") {
          var endOfMonth = new Date(date2.getFullYear(), date2.getMonth() + 1, 0);
          var endWeekNb = parent.getWeekNumber(endOfMonth);
          var startWeekNb = parent.getWeekNumber(new Date(date2.getFullYear(), date2.getMonth()));
          if (startWeekNb > endWeekNb) {
            startWeekNb = 0;
            endWeekNb++;
          }
          return endWeekNb - startWeekNb + 1;
        } else if (domain === "year") {
          return parent.getWeekNumber(new Date(date2.getFullYear(), 11, 31));
        }
      };
      switch (this.options.subDomain) {
        case "x_min":
        case "min":
          return this.getMinuteDomain(date, computeMinSubDomainSize(date, this.options.domain));
        case "x_hour":
        case "hour":
          return this.getHourDomain(date, computeHourSubDomainSize(date, this.options.domain));
        case "x_day":
        case "day":
          return this.getDayDomain(date, computeDaySubDomainSize(date, this.options.domain));
        case "x_week":
        case "week":
          return this.getWeekDomain(date, computeWeekSubDomainSize(date, this.options.domain));
        case "x_month":
        case "month":
          return this.getMonthDomain(date, 12);
      }
    },
    /**
     * Get the n-th next domain after the calendar newest (rightmost) domain
     * @param  int n
     * @return Date The start date of the wanted domain
     */
    getNextDomain: function(n) {
      "use strict";
      if (arguments.length === 0) {
        n = 1;
      }
      return this.getDomain(this.jumpDate(this.getDomainKeys().pop(), n, this.options.domain), 1)[0];
    },
    /**
     * Get the n-th domain before the calendar oldest (leftmost) domain
     * @param  int n
     * @return Date The start date of the wanted domain
     */
    getPreviousDomain: function(n) {
      "use strict";
      if (arguments.length === 0) {
        n = 1;
      }
      return this.getDomain(this.jumpDate(this.getDomainKeys().shift(), -n, this.options.domain), 1)[0];
    },
    // =========================================================================//
    // DATAS																	//
    // =========================================================================//
    /**
     * Fetch and interpret data from the datasource
     *
     * @param string|object source
     * @param Date startDate
     * @param Date endDate
     * @param function callback
     * @param function|boolean afterLoad function used to convert the data into a json object. Use true to use the afterLoad callback
     * @param updateMode
     *
     * @return mixed
     * - True if there are no data to load
     * - False if data are loaded asynchronously
     */
    getDatas: function(source, startDate, endDate, callback, afterLoad, updateMode) {
      "use strict";
      var self = this;
      if (arguments.length < 5) {
        afterLoad = true;
      }
      if (arguments.length < 6) {
        updateMode = this.APPEND_ON_UPDATE;
      }
      var _callback = function(error, data) {
        if (afterLoad !== false) {
          if (typeof afterLoad === "function") {
            data = afterLoad(data);
          } else if (typeof self.options.afterLoadData === "function") {
            data = self.options.afterLoadData(data);
          } else {
            console.log("Provided callback for afterLoadData is not a function.");
          }
        } else if (self.options.dataType === "csv" || self.options.dataType === "tsv") {
          data = this.interpretCSV(data);
        }
        self.parseDatas(data, updateMode, startDate, endDate);
        if (typeof callback === "function") {
          callback();
        }
      };
      switch (typeof source) {
        case "string":
          if (source === "") {
            _callback(null, {});
            return true;
          } else {
            var url = this.parseURI(source, startDate, endDate);
            var requestType = "GET";
            if (self.options.dataPostPayload !== null) {
              requestType = "POST";
            }
            var payload = null;
            if (self.options.dataPostPayload !== null) {
              payload = this.parseURI(self.options.dataPostPayload, startDate, endDate);
            }
            var xhr = null;
            switch (this.options.dataType) {
              case "json":
                xhr = d3.json(url);
                break;
              case "csv":
                xhr = d3.csv(url);
                break;
              case "tsv":
                xhr = d3.tsv(url);
                break;
              case "txt":
                xhr = d3.text(url, "text/plain");
                break;
            }
            if (self.options.dataRequestHeaders !== null) {
              for (var header in self.options.dataRequestHeaders) {
                if (self.options.dataRequestHeaders.hasOwnProperty(header)) {
                  xhr.header(header, self.options.dataRequestHeaders[header]);
                }
              }
            }
            xhr.send(requestType, payload, _callback);
          }
          return false;
        case "object":
          if (source === Object(source)) {
            _callback(null, source);
            return false;
          }
        /* falls through */
        default:
          _callback(null, {});
          return true;
      }
    },
    /**
     * Populate the calendar internal data
     *
     * @param object data
     * @param constant updateMode
     * @param Date startDate
     * @param Date endDate
     *
     * @return void
     */
    parseDatas: function(data, updateMode, startDate, endDate) {
      "use strict";
      if (updateMode === this.RESET_ALL_ON_UPDATE) {
        this._domains.forEach(function(key, value) {
          value.forEach(function(element, index2, array) {
            array[index2].v = null;
          });
        });
      }
      var temp = {};
      var extractTime = function(d2) {
        return d2.t;
      };
      for (var d in data) {
        var date = new Date(d * 1e3);
        var domainUnit = this.getDomain(date)[0].getTime();
        if (this.DSTDomain.indexOf(domainUnit) >= 0) {
          if (this._domains.has(domainUnit - 3600 * 1e3)) {
            domainUnit -= 3600 * 1e3;
          }
        }
        if (isNaN(d) || !data.hasOwnProperty(d) || !this._domains.has(domainUnit) || !(domainUnit >= +startDate && domainUnit < +endDate)) {
          continue;
        }
        var subDomainsData = this._domains.get(domainUnit);
        if (!temp.hasOwnProperty(domainUnit)) {
          temp[domainUnit] = subDomainsData.map(extractTime);
        }
        var index = temp[domainUnit].indexOf(this._domainType[this.options.subDomain].extractUnit(date));
        if (updateMode === this.RESET_SINGLE_ON_UPDATE) {
          subDomainsData[index].v = data[d];
        } else {
          if (!isNaN(subDomainsData[index].v)) {
            subDomainsData[index].v += data[d];
          } else {
            subDomainsData[index].v = data[d];
          }
        }
      }
    },
    parseURI: function(str, startDate, endDate) {
      "use strict";
      str = str.replace(/\{\{t:start\}\}/g, startDate.getTime() / 1e3);
      str = str.replace(/\{\{t:end\}\}/g, endDate.getTime() / 1e3);
      str = str.replace(/\{\{d:start\}\}/g, startDate.toISOString());
      str = str.replace(/\{\{d:end\}\}/g, endDate.toISOString());
      return str;
    },
    interpretCSV: function(data) {
      "use strict";
      var d = {};
      var keys = Object.keys(data[0]);
      var i, total;
      for (i = 0, total = data.length; i < total; i++) {
        d[data[i][keys[0]]] = +data[i][keys[1]];
      }
      return d;
    },
    /**
     * Handle the calendar layout and dimension
     *
     * Expand and shrink the container depending on its children dimension
     * Also rearrange the children position depending on their dimension,
     * and the legend position
     *
     * @return void
     */
    resize: function() {
      "use strict";
      var parent = this;
      var options = parent.options;
      var legendWidth = options.displayLegend ? parent.Legend.getDim("width") + options.legendMargin[1] + options.legendMargin[3] : 0;
      var legendHeight = options.displayLegend ? parent.Legend.getDim("height") + options.legendMargin[0] + options.legendMargin[2] : 0;
      var graphWidth = parent.graphDim.width - options.domainGutter - options.cellPadding;
      var graphHeight = parent.graphDim.height - options.domainGutter - options.cellPadding;
      var dayLabelWidth = 0;
      if (options.dayLabel && options.domain === "month" && options.subDomain === "day") {
        dayLabelWidth = options.cellSize + options.cellPadding;
      }
      this.root.transition().duration(options.animationDuration).attr("width", function() {
        if (options.legendVerticalPosition === "middle" || options.legendVerticalPosition === "center") {
          return graphWidth + legendWidth + dayLabelWidth;
        }
        return Math.max(graphWidth, legendWidth) + dayLabelWidth;
      }).attr("height", function() {
        if (options.legendVerticalPosition === "middle" || options.legendVerticalPosition === "center") {
          return Math.max(graphHeight, legendHeight);
        }
        return graphHeight + legendHeight;
      });
      this.root.select(".graph").transition().duration(options.animationDuration).attr("y", function() {
        if (options.legendVerticalPosition === "top") {
          return legendHeight;
        }
        return 0;
      }).attr("x", function() {
        if ((options.legendVerticalPosition === "middle" || options.legendVerticalPosition === "center") && options.legendHorizontalPosition === "left") {
          return legendWidth + dayLabelWidth;
        }
        return dayLabelWidth;
      });
    },
    // =========================================================================//
    // PUBLIC API																//
    // =========================================================================//
    /**
     * Shift the calendar forward
     */
    next: function(n) {
      "use strict";
      if (arguments.length === 0) {
        n = 1;
      }
      return this.loadNextDomain(n);
    },
    /**
     * Shift the calendar backward
     */
    previous: function(n) {
      "use strict";
      if (arguments.length === 0) {
        n = 1;
      }
      return this.loadPreviousDomain(n);
    },
    /**
     * Jump directly to a specific date
     *
     * JumpTo will scroll the calendar until the wanted domain with the specified
     * date is visible. Unless you set reset to true, the wanted domain
     * will not necessarily be the first (leftmost) domain of the calendar.
     *
     * @param Date date Jump to the domain containing that date
     * @param bool reset Whether the wanted domain should be the first domain of the calendar
     * @param bool True of the calendar was scrolled
     */
    jumpTo: function(date, reset) {
      "use strict";
      if (arguments.length < 2) {
        reset = false;
      }
      var domains = this.getDomainKeys();
      var firstDomain = domains[0];
      var lastDomain = domains[domains.length - 1];
      if (date < firstDomain) {
        return this.loadPreviousDomain(this.getDomain(firstDomain, date).length);
      } else {
        if (reset) {
          return this.loadNextDomain(this.getDomain(firstDomain, date).length);
        }
        if (date > lastDomain) {
          return this.loadNextDomain(this.getDomain(lastDomain, date).length);
        }
      }
      return false;
    },
    /**
     * Navigate back to the start date
     *
     * @since  3.3.8
     * @return void
     */
    rewind: function() {
      "use strict";
      this.jumpTo(this.options.start, true);
    },
    /**
     * Update the calendar with new data
     *
     * @param  object|string		dataSource		The calendar's datasource, same type as this.options.data
     * @param  boolean|function		afterLoad		Whether to execute afterLoad() on the data. Pass directly a function
     * if you don't want to use the afterLoad() callback
     */
    update: function(dataSource, afterLoad, updateMode) {
      "use strict";
      if (arguments.length === 0) {
        dataSource = this.options.data;
      }
      if (arguments.length < 2) {
        afterLoad = true;
      }
      if (arguments.length < 3) {
        updateMode = this.RESET_ALL_ON_UPDATE;
      }
      var domains = this.getDomainKeys();
      var self = this;
      this.getDatas(
        dataSource,
        new Date(domains[0]),
        this.getSubDomain(domains[domains.length - 1]).pop(),
        function() {
          self.fill();
          self.afterUpdate();
        },
        afterLoad,
        updateMode
      );
    },
    /**
     * Set the legend
     *
     * @param array legend an array of integer, representing the different threshold value
     * @param array colorRange an array of 2 hex colors, for the minimum and maximum colors
     */
    setLegend: function() {
      "use strict";
      var oldLegend = this.options.legend.slice(0);
      if (arguments.length >= 1 && Array.isArray(arguments[0])) {
        this.options.legend = arguments[0];
      }
      if (arguments.length >= 2) {
        if (Array.isArray(arguments[1]) && arguments[1].length >= 2) {
          this.options.legendColors = [arguments[1][0], arguments[1][1]];
        } else {
          this.options.legendColors = arguments[1];
        }
      }
      if (arguments.length > 0 && !arrayEquals(oldLegend, this.options.legend) || arguments.length >= 2) {
        this.Legend.buildColors();
        this.fill();
      }
      this.Legend.redraw(this.graphDim.width - this.options.domainGutter - this.options.cellPadding);
    },
    /**
     * Remove the legend
     *
     * @return bool False if there is no legend to remove
     */
    removeLegend: function() {
      "use strict";
      if (!this.options.displayLegend) {
        return false;
      }
      this.options.displayLegend = false;
      this.Legend.remove();
      return true;
    },
    /**
     * Display the legend
     *
     * @return bool False if the legend was already displayed
     */
    showLegend: function() {
      "use strict";
      if (this.options.displayLegend) {
        return false;
      }
      this.options.displayLegend = true;
      this.Legend.redraw(this.graphDim.width - this.options.domainGutter - this.options.cellPadding);
      return true;
    },
    /**
     * Highlight dates
     *
     * Add a highlight class to a set of dates
     *
     * @since  3.3.5
     * @param  array Array of dates to highlight
     * @return bool True if dates were highlighted
     */
    highlight: function(args) {
      "use strict";
      if ((this.options.highlight = this.expandDateSetting(args)).length > 0) {
        this.fill();
        return true;
      }
      return false;
    },
    /**
     * Destroy the calendar
     *
     * Usage: cal = cal.destroy();
     *
     * @since  3.3.6
     * @param function A callback function to trigger after destroying the calendar
     * @return null
     */
    destroy: function(callback) {
      "use strict";
      this.root.transition().duration(this.options.animationDuration).attr("width", 0).attr("height", 0).remove().each("end", function() {
        if (typeof callback === "function") {
          callback();
        } else if (typeof callback !== "undefined") {
          console.log("Provided callback for destroy() is not a function.");
        }
      });
      return null;
    },
    getSVG: function() {
      "use strict";
      var styles = {
        ".cal-heatmap-container": {},
        ".graph": {},
        ".graph-rect": {},
        "rect.highlight": {},
        "rect.now": {},
        "rect.highlight-now": {},
        "text.highlight": {},
        "text.now": {},
        "text.highlight-now": {},
        ".domain-background": {},
        ".graph-label": {},
        ".subdomain-text": {},
        ".q0": {},
        ".qi": {}
      };
      for (var j = 1, total = this.options.legend.length + 1; j <= total; j++) {
        styles[".q" + j] = {};
      }
      var root = this.root;
      var whitelistStyles = [
        // SVG specific properties
        "stroke",
        "stroke-width",
        "stroke-opacity",
        "stroke-dasharray",
        "stroke-dashoffset",
        "stroke-linecap",
        "stroke-miterlimit",
        "fill",
        "fill-opacity",
        "fill-rule",
        "marker",
        "marker-start",
        "marker-mid",
        "marker-end",
        "alignement-baseline",
        "baseline-shift",
        "dominant-baseline",
        "glyph-orientation-horizontal",
        "glyph-orientation-vertical",
        "kerning",
        "text-anchor",
        "shape-rendering",
        // Text Specific properties
        "text-transform",
        "font-family",
        "font",
        "font-size",
        "font-weight"
      ];
      var filterStyles = function(attribute, property, value) {
        if (whitelistStyles.indexOf(property) !== -1) {
          styles[attribute][property] = value;
        }
      };
      var getElement = function(e) {
        return root.select(e)[0][0];
      };
      for (var element in styles) {
        if (!styles.hasOwnProperty(element)) {
          continue;
        }
        var dom = getElement(element);
        if (dom === null) {
          continue;
        }
        if ("getComputedStyle" in window) {
          var cs = getComputedStyle(dom, null);
          if (cs.length !== 0) {
            for (var i = 0; i < cs.length; i++) {
              filterStyles(element, cs.item(i), cs.getPropertyValue(cs.item(i)));
            }
          } else {
            for (var k in cs) {
              if (cs.hasOwnProperty(k)) {
                filterStyles(element, k, cs[k]);
              }
            }
          }
        } else if ("currentStyle" in dom) {
          var css = dom.currentStyle;
          for (var p in css) {
            filterStyles(element, p, css[p]);
          }
        }
      }
      var string = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><style type="text/css"><![CDATA[ ';
      for (var style in styles) {
        string += style + " {\n";
        for (var l in styles[style]) {
          string += "	" + l + ":" + styles[style][l] + ";\n";
        }
        string += "}\n";
      }
      string += "]]></style>";
      string += new XMLSerializer().serializeToString(this.root[0][0]);
      string += "</svg>";
      return string;
    }
  };
  var DomainPosition = function() {
    "use strict";
    this.positions = d3.map();
  };
  DomainPosition.prototype.getPosition = function(d) {
    "use strict";
    return this.positions.get(d);
  };
  DomainPosition.prototype.getPositionFromIndex = function(i) {
    "use strict";
    var domains = this.getKeys();
    return this.positions.get(domains[i]);
  };
  DomainPosition.prototype.getLast = function() {
    "use strict";
    var domains = this.getKeys();
    return this.positions.get(domains[domains.length - 1]);
  };
  DomainPosition.prototype.setPosition = function(d, dim) {
    "use strict";
    this.positions.set(d, dim);
  };
  DomainPosition.prototype.shiftRightBy = function(exitingDomainDim) {
    "use strict";
    this.positions.forEach(function(key, value) {
      this.set(key, value - exitingDomainDim);
    });
    var domains = this.getKeys();
    this.positions.remove(domains[0]);
  };
  DomainPosition.prototype.shiftLeftBy = function(enteringDomainDim) {
    "use strict";
    this.positions.forEach(function(key, value) {
      this.set(key, value + enteringDomainDim);
    });
    var domains = this.getKeys();
    this.positions.remove(domains[domains.length - 1]);
  };
  DomainPosition.prototype.getKeys = function() {
    "use strict";
    return this.positions.keys().sort(function(a, b) {
      return parseInt(a, 10) - parseInt(b, 10);
    });
  };
  var Legend = function(calendar) {
    "use strict";
    this.calendar = calendar;
    this.computeDim();
    if (calendar.options.legendColors !== null) {
      this.buildColors();
    }
  };
  Legend.prototype.computeDim = function() {
    "use strict";
    var options = this.calendar.options;
    this.dim = {
      width: options.legendCellSize * (options.legend.length + 1) + options.legendCellPadding * options.legend.length,
      height: options.legendCellSize
    };
  };
  Legend.prototype.remove = function() {
    "use strict";
    this.calendar.root.select(".graph-legend").remove();
    this.calendar.resize();
  };
  Legend.prototype.redraw = function(width) {
    "use strict";
    if (!this.calendar.options.displayLegend) {
      return false;
    }
    var parent = this;
    var calendar = this.calendar;
    var legend = calendar.root;
    var legendItem;
    var options = calendar.options;
    this.computeDim();
    var _legend = options.legend.slice(0);
    _legend.push(_legend[_legend.length - 1] + 1);
    var legendElement = calendar.root.select(".graph-legend");
    if (legendElement[0][0] !== null) {
      legend = legendElement;
      legendItem = legend.select("g").selectAll("rect").data(_legend);
    } else {
      legend = options.legendVerticalPosition === "top" ? legend.insert("svg", ".graph") : legend.append("svg");
      legend.attr("x", getLegendXPosition()).attr("y", getLegendYPosition());
      legendItem = legend.attr("class", "graph-legend").attr("height", parent.getDim("height")).attr("width", parent.getDim("width")).append("g").selectAll().data(_legend);
    }
    legendItem.enter().append("rect").call(legendCellLayout).attr("class", function(d) {
      return calendar.Legend.getClass(d, calendar.legendScale === null);
    }).attr("fill-opacity", 0).call(function(selection) {
      if (calendar.legendScale !== null && options.legendColors !== null && options.legendColors.hasOwnProperty("base")) {
        selection.attr("fill", options.legendColors.base);
      }
    }).append("title");
    legendItem.exit().transition().duration(options.animationDuration).attr("fill-opacity", 0).remove();
    legendItem.transition().delay(function(d, i) {
      return options.animationDuration * i / 10;
    }).call(legendCellLayout).attr("fill-opacity", 1).call(function(element) {
      element.attr("fill", function(d, i) {
        if (calendar.legendScale === null) {
          return "";
        }
        if (i === 0) {
          return calendar.legendScale(d - 1);
        }
        return calendar.legendScale(options.legend[i - 1]);
      });
      element.attr("class", function(d) {
        return calendar.Legend.getClass(d, calendar.legendScale === null);
      });
    });
    function legendCellLayout(selection) {
      selection.attr("width", options.legendCellSize).attr("height", options.legendCellSize).attr("x", function(d, i) {
        return i * (options.legendCellSize + options.legendCellPadding);
      });
    }
    legendItem.select("title").text(function(d, i) {
      if (i === 0) {
        return calendar.formatStringWithObject(options.legendTitleFormat.lower, {
          min: options.legend[i],
          name: options.itemName[1]
        });
      } else if (i === _legend.length - 1) {
        return calendar.formatStringWithObject(options.legendTitleFormat.upper, {
          max: options.legend[i - 1],
          name: options.itemName[1]
        });
      } else {
        return calendar.formatStringWithObject(options.legendTitleFormat.inner, {
          down: options.legend[i - 1],
          up: options.legend[i],
          name: options.itemName[1]
        });
      }
    });
    legend.transition().duration(options.animationDuration).attr("x", getLegendXPosition()).attr("y", getLegendYPosition()).attr("width", parent.getDim("width")).attr("height", parent.getDim("height"));
    legend.select("g").transition().duration(options.animationDuration).attr("transform", function() {
      if (options.legendOrientation === "vertical") {
        return "rotate(90 " + options.legendCellSize / 2 + " " + options.legendCellSize / 2 + ")";
      }
      return "";
    });
    function getLegendXPosition() {
      switch (options.legendHorizontalPosition) {
        case "right":
          if (options.legendVerticalPosition === "center" || options.legendVerticalPosition === "middle") {
            return width + options.legendMargin[3];
          }
          return width - parent.getDim("width") - options.legendMargin[1];
        case "middle":
        case "center":
          return Math.round(width / 2 - parent.getDim("width") / 2);
        default:
          return options.legendMargin[3];
      }
    }
    function getLegendYPosition() {
      if (options.legendVerticalPosition === "bottom") {
        return calendar.graphDim.height + options.legendMargin[0] - options.domainGutter - options.cellPadding;
      }
      return options.legendMargin[0];
    }
    calendar.resize();
  };
  Legend.prototype.getDim = function(axis) {
    "use strict";
    var isHorizontal = this.calendar.options.legendOrientation === "horizontal";
    switch (axis) {
      case "width":
        return this.dim[isHorizontal ? "width" : "height"];
      case "height":
        return this.dim[isHorizontal ? "height" : "width"];
    }
  };
  Legend.prototype.buildColors = function() {
    "use strict";
    var options = this.calendar.options;
    if (options.legendColors === null) {
      this.calendar.legendScale = null;
      return false;
    }
    var _colorRange = [];
    if (Array.isArray(options.legendColors)) {
      _colorRange = options.legendColors;
    } else if (options.legendColors.hasOwnProperty("min") && options.legendColors.hasOwnProperty("max")) {
      _colorRange = [options.legendColors.min, options.legendColors.max];
    } else {
      options.legendColors = null;
      return false;
    }
    var _legend = options.legend.slice(0);
    if (_legend[0] > 0) {
      _legend.unshift(0);
    } else if (_legend[0] <= 0) {
      _legend.unshift(_legend[0] - (_legend[_legend.length - 1] - _legend[0]) / _legend.length);
    }
    var colorScale = d3.scale.linear().range(_colorRange).interpolate(d3.interpolateHcl).domain([d3.min(_legend), d3.max(_legend)]);
    var legendColors = _legend.map(function(element) {
      return colorScale(element);
    });
    this.calendar.legendScale = d3.scale.threshold().domain(options.legend).range(legendColors);
    return true;
  };
  Legend.prototype.getClass = function(n, withCssClass) {
    "use strict";
    if (n === null || isNaN(n)) {
      return "";
    }
    var index = [this.calendar.options.legend.length + 1];
    for (var i = 0, total = this.calendar.options.legend.length - 1; i <= total; i++) {
      if (this.calendar.options.legend[0] > 0 && n < 0) {
        index = ["1", "i"];
        break;
      }
      if (n <= this.calendar.options.legend[i]) {
        index = [i + 1];
        break;
      }
    }
    if (n === 0) {
      index.push(0);
    }
    index.unshift("");
    return (index.join(" r") + (withCssClass ? index.join(" q") : "")).trim();
  };
  function mergeRecursive(obj1, obj2) {
    "use strict";
    for (var p in obj2) {
      try {
        if (obj2[p].constructor === Object) {
          obj1[p] = mergeRecursive(obj1[p], obj2[p]);
        } else {
          obj1[p] = obj2[p];
        }
      } catch (e) {
        obj1[p] = obj2[p];
      }
    }
    return obj1;
  }
  function arrayEquals(arrayA, arrayB) {
    "use strict";
    if (!arrayB || !arrayA) {
      return false;
    }
    if (arrayA.length !== arrayB.length) {
      return false;
    }
    for (var i = 0; i < arrayA.length; i++) {
      if (arrayA[i] instanceof Array && arrayB[i] instanceof Array) {
        if (!arrayEquals(arrayA[i], arrayB[i])) {
          return false;
        }
      } else if (arrayA[i] !== arrayB[i]) {
        return false;
      }
    }
    return true;
  }
  if (typeof define === "function" && define.amd) {
    define(["d3"], function() {
      "use strict";
      return CalHeatMap;
    });
  } else if (typeof module === "object" && module.exports) {
    module.exports = CalHeatMap;
  } else {
    window.CalHeatMap = CalHeatMap;
  }

  // src/web/bridge.ts
  function bridgeCommand(command) {
    return pycmd(command);
  }

  // src/web/main.ts
  function injectStyles(cssContent) {
    const style = document.createElement("style");
    style.textContent = cssContent;
    document.head.appendChild(style);
  }
  injectStyles(cal_heatmap_default);
  injectStyles(review_heatmap_default);
  var MileageHeatmap = class {
    constructor(options) {
      this.options = options;
      this.heatmap = null;
    }
    heatmap;
    create(data) {
      let calStartDate = applyDateOffset(/* @__PURE__ */ new Date());
      let calMinDate = applyDateOffset(new Date(this.options.start));
      let calMaxDate = applyDateOffset(new Date(this.options.stop));
      let calTodayDate = applyDateOffset(new Date(this.options.today));
      if (this.options.domain === "month") {
        let padding = this.options.range / 2;
        let paddingLower = Math.round(padding - 1);
        let paddingUpper = Math.round(padding + 1);
        calStartDate.setMonth(calStartDate.getMonth() - paddingLower);
        calStartDate.setDate(1);
        if (calMinDate.getTime() > calStartDate.getTime()) {
          calStartDate = calMinDate;
        }
        let tempDate = new Date(calTodayDate);
        tempDate.setMonth(tempDate.getMonth() + paddingUpper);
        tempDate.setDate(1);
        if (tempDate.getTime() > calMaxDate.getTime()) {
          calMaxDate = tempDate;
        }
      }
      let heatmap = new CalHeatMap();
      heatmap.init({
        domain: this.options.domain,
        subDomain: this.options.subdomain,
        range: this.options.range,
        minDate: calMinDate,
        maxDate: calMaxDate,
        cellSize: 10,
        verticalOrientation: false,
        dayLabel: true,
        domainMargin: [1, 1, 1, 1],
        itemName: ["card", "cards"],
        highlight: calTodayDate,
        today: calTodayDate,
        start: calStartDate,
        legend: this.options.legend,
        displayLegend: false,
        domainLabelFormat: this.options.domLabForm,
        tooltip: true,
        itemSelector: "#cal-heatmap-mileage",
        subDomainTitleFormat: (isEmpty, formatData, cellData) => {
          let tooltip;
          let count = formatData.count;
          if (count !== void 0 && count.startsWith("-")) {
            count = count.substring(1);
          }
          if (isEmpty) {
            tooltip = `<b>No</b> ${Date.now() < cellData.t ? "miles scheduled" : "miles logged"} on ${formatData.date}`;
          } else {
            const label = Math.abs(cellData.v) == 1 ? "mile" : "miles";
            tooltip = `<b>${count}</b> ${label} <b>${cellData.v < 0 ? "planned" : "walked"}</b> ${formatData.connector} ${formatData.date}`;
          }
          return tooltip;
        },
        onClick: (date, nb) => {
          if (nb === null || nb == 0) {
            heatmap.highlight(calTodayDate);
            return;
          }
          let isHistory = nb >= 0;
          let cmd = this.options.whole ? "" : "deck:current ";
          let today = new Date(calTodayDate);
          today.setHours(0, 0, 0);
          let diffSecs = Math.abs(today.getTime() - date.getTime()) / 1e3;
          let diffDays = Math.round(diffSecs / 86400);
          if (nb >= 0) {
            if (!window.rhNewFinderAPI) {
              let cutoff1 = date.getTime() + this.options.offset * 3600 * 1e3;
              let cutoff2 = cutoff1 + 86400 * 1e3;
              cmd += "rid:" + cutoff1 + ":" + cutoff2;
            } else {
              cmd += "prop:rated=" + (diffDays ? -diffDays : 0);
            }
          } else {
            cmd += "prop:due=" + diffDays;
          }
          bridgeCommand("revhm_browse:" + cmd);
          heatmap.highlight([calTodayDate, date]);
        },
        afterLoadData: function afterLoadData(timestamps) {
          let results = {};
          for (let timestamp_string in timestamps) {
            let value = timestamps[timestamp_string];
            let timestamp = parseInt(timestamp_string, 10);
            results[timestamp + tzOffsetByTimestamp(timestamp)] = value;
          }
          return results;
        },
        data
      });
      this.heatmap = heatmap;
    }
    onHmHome(event, button) {
      if (event.shiftKey) {
        bridgeCommand("revhm_modeswitch");
      } else {
        this.heatmap.rewind();
      }
    }
    onHmNavigate(event, button, direction) {
      if (direction === "next") {
        if (event.shiftKey) {
          this.heatmap.jumpTo(this.heatmap.options.maxDate, false);
        } else {
          this.heatmap.next(this.heatmap.options.range);
        }
      } else {
        if (event.shiftKey) {
          this.heatmap.jumpTo(this.heatmap.options.minDate, false);
        } else {
          this.heatmap.previous(this.heatmap.options.range);
        }
      }
    }
    onHmOpts(event, button) {
      if (event.shiftKey) {
        bridgeCommand("revhm_themeswitch");
      } else {
        bridgeCommand("revhm_opts");
      }
    }
    onHmContrib(event, button) {
      if (event.shiftKey) {
        bridgeCommand("revhm_snanki");
      } else {
        bridgeCommand("revhm_contrib");
      }
    }
  };
  function applyDateOffset(date) {
    return new Date(date.getTime() + date.getTimezoneOffset() * 60 * 1e3);
  }
  function tzOffsetByTimestamp(timestamp) {
    let date = new Date(timestamp * 1e3);
    return date.getTimezoneOffset() * 60;
  }
  globalThis.MileageHeatmap = MileageHeatmap;
})();
/*! cal-heatmap v3.6.3.2-anki2150 (2022)
 *  ---------------------------------------------
 *  Fork of Cal-HeatMap for use in the Anki add-on Review Heatmap
 *  https://github.com/glutanimate/cal-heatmap
 *  Licensed under the MIT license
 *  Copyright 2014 Wan Qi Chen
 *  Copyright 2018-2022 Glutanimate
 *  Contributors: gakada, Srdjan Prpa
  */
