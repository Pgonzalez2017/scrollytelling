var config = {
    style: 'mapbox://styles/conisco/ck2s7cs0g1ank1cqowi649zul',
    accessToken: 'pk.eyJ1IjoiY29uaXNjbyIsImEiOiJjamxkaWNyOXUwYW4zM3ZxZ2c1ZXFlNWE2In0.ytG8rMF1nf5OZtOMpZVQHg',
    showMarkers: false,
    theme: 'light',
    alignment: 'right',
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {
            id: 'phl',
            title: 'Philadelphia Bicycle Infrastructure',
            image: '',
            description: 'bilbao',
            location: {
               center: [-2.94449, 43.27862],
				zoom: 9.04,
pitch: 0.00,
bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'telegrafo',
                    opacity: .45
                }
            ],
            onChapterExit: [
                {
                    layer: 'cables',
                    opacity: 0
                }
            ]
        },
        {
            id: 'bike-lanes',
            title: '1',
            image: '',
            description: 'Philadelphia has XX miles of bike lanes, XX miles of which are protected. Drivers are getting more used to sharing the road, but ride defensively.',
location: {
               center: [-5.62912, 43.53852],
zoom: 9.04,
pitch: 58.50,
bearing: -32.00
            },
            onChapterEnter: [
                {
                    layer: 'cables',
                    opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'indego',
            title: '2',
            image: '',
            description: 'Indego has been operating in Philadelphia since 20XX. The system initally was focused on Center City, but has expanded service to neighboring areas to support equitable mobility options to the city\'s residents.',
            location: {
                center: [-24.79359, 39.93339],
zoom: 2.92,
pitch: 7.00,
bearing: -15.20
            },
            onChapterEnter: [
                {
                    layer: 'cables',
                    opacity: 1
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
		
		       {
            id: 'grande',
            title: '3',
            image: '',
            description: 'lore ipsum',
            location: {
                center: [66.71577, 15.13252],
zoom: 2.16,
pitch: 7.00,
bearing: -15.20
            },
            onChapterEnter: [
                {
                    layer: 'cables',
                    opacity: 0.3
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
		 {
            id: 'miami',
            title: '4',
            image: '',
            description: 'lore ipsum',
            location: {
                center: [-81.22372, 29.82514],
zoom: 6.50,
pitch: 56.50,
bearing: -65.21
            },
            onChapterEnter: [
                {
                    layer: 'cables',
                    opacity: 0
                }
            ],
            onChapterExit: [
                {
                    layer: 'indego-stations',
                    opacity: 0
                }
            ]
        },
               
       
    ]
};
