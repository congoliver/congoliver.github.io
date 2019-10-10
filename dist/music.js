const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
		name: "A Racer's Dream",
		artist: '陈光荣',
		url: 'http://music.163.com/song/media/outer/url?id=27591661.mp3',
		cover: 'http://p2.music.126.net/9KeyafHLjadqSQTRS_tN5Q==/5741649720318487.jpg?param=300x300'
	  },
	  {
		name: '寻',
		artist: '三亩地',
		url: 'http://music.163.com/song/media/outer/url?id=31445474.mp3',
		cover: 'http://p1.music.126.net/tgkN397ohC6XpqRRHzndLw==/2925800441997173.jpg?param=300x300'
	  },
	  {
		name: 'First Date',
		artist: '陈光荣',
		url: 'http://music.163.com/song/media/outer/url?id=492256479.mp3',
		cover: 'http://p2.music.126.net/yo4vj2z8jJjyxJQsJM1VpA==/109951163060152521.jpg?param=300x300'
	  },
	  {
		name: 'Fonte',
		artist: 'saigenji',
		url: 'http://music.163.com/song/media/outer/url?id=28445782.mp3',
		cover: 'http://p1.music.126.net/z14HqwDUEqknSB5UZMYcRw==/5892282813453489.jpg?param=300x300'
	  },
	  {
		name: 'Rainbow on the Moon',
		artist: 'S.E.N.S.',
		url: 'http://music.163.com/song/media/outer/url?id=22815053.mp3',
		cover: 'http://p1.music.126.net/R3vrjVpdEUUvNMnu1NIAkQ==/17907745881852375.jpg?param=300x300'
	  },
	  {
		name: 'PROMISE',
		artist: '김장우',
		url: 'http://music.163.com/song/media/outer/url?id=28793744.mp3',
		cover: 'http://p2.music.126.net/g0JJBlaSRp6399unZTYVMQ==/6047313953445707.jpg?param=300x300'
	  },
	  {
		name: 'であい',
		artist: 'TO-MAS SOUNDSIGHT FLUORESCENT FOREST',
		url: 'http://music.163.com/song/media/outer/url?id=414118718.mp3',
		cover: 'http://p1.music.126.net/SniCAfd0JZlppIxCqgeyPA==/1396379775706347.jpg?param=300x300'
	  },
	  {
		name: 'My Memory ~“冬のソナタ”より',
		artist: '広橋真紀子',
		url: 'http://music.163.com/song/media/outer/url?id=578064.mp3',
		cover: 'http://p1.music.126.net/fd5lP6CTmgG8COrQbM7D2g==/942281465004178.jpg?param=300x300'
	  },
	  {
		name: "Look At Me Now",
		artist: 'Charlie Puth',
		url: 'http://music.163.com/song/media/outer/url?id=28188171.mp3',
		cover: 'http://p2.music.126.net/kjFVkzzt6BzB9EXr0qB1zA==/2576155743910424.jpg?param=300x300'
	  },
	  {
		name: "The New Kings",
		artist: 'Vicetone,Popeska,Luciana',
		url: 'http://music.163.com/song/media/outer/url?id=29910080.mp3',
		cover: 'http://p1.music.126.net/Qvm5zp1BEcDM8i_2pDg_bg==/2531075769877809.jpg?param=300x300'
	  },
	  {
		name: "There For You",
		artist: 'Martin Garrix,Troye Sivan',
		url: 'http://music.163.com/song/media/outer/url?id=480426313.mp3',
		cover: 'http://p2.music.126.net/E_ffmvXrVZoTugVf_Zf4Cg==/18520173860179248.jpg?param=300x300'
	  },
	  {
		name: "I Hate Myself For Loving You",
		artist: 'Joan Jett & the Blackhearts',
		url: 'http://music.163.com/song/media/outer/url?id=4132379.mp3',
		cover: 'http://p1.music.126.net/rde3fYhAf7xUId0TDFSyBA==/2593747929926872.jpg?param=300x300'
	  },
	  {
		name: "Beautiful Corruption",
		artist: 'Charlie Puth',
		url: 'http://music.163.com/song/media/outer/url?id=28188176.mp3',
		cover: 'http://p2.music.126.net/kjFVkzzt6BzB9EXr0qB1zA==/2576155743910424.jpg?param=300x300'
	  },
	  {
		name: "Time Machine",
		artist: 'Ingrid Michaelson',
		url: 'http://music.163.com/song/media/outer/url?id=28402345.mp3',
		cover: 'http://p1.music.126.net/dS47YHnH4z4EK1ctn-szBw==/109951163446338799.jpg?param=300x300'
	  }
    ]
});