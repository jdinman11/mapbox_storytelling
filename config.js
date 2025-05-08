var config = {
    style: 'https://api.mapbox.com/styles/v1/jdinman/cmacuc0lm009301quhqjghfcr.html?title=view&access_token=pk.eyJ1IjoiamRpbm1hbiIsImEiOiJjbTk4dHV4amQwNmh6MmpvaDQxNzVwc2IzIn0.9_GpdljINdn0ymytgzsm-A&zoomwheel=true&fresh=true#2/38/-34',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiamRpbm1hbiIsImEiOiJjbTk4dHV4amQwNmh6MmpvaDQxNzVwc2IzIn0.9_GpdljINdn0ymytgzsm-A',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'blue'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Black Agency and Southern Literature',
    subtitle: 'Examining the relationship between purchases by African-Americans and movement in Southern Literature',
    byline: 'Jacob Dinman',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'Local Color Stories',
            image: 'https://twain.lib.virginia.edu/huckfinn/chan2.jpg',
            description: 'Local color stories were a very popular form of short stories that were published in various newspapers in the 19th century. Stories like “Marse Chan” by Thomas Nelson Page and “Free Joe and the Rest of the World” paint picturesque images of the Southern Landscape where black characters, usually formerly enslaved, are treated as stagnant fixtures of the landscape. Stories like “Free Joe and the Rest of the World” and “Marse Chan” imply that slavery was the natural and happier way of life for African-Americans in the south.',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'chapter-one',
            alignment: 'right',
            hidden: false,
            title: 'Someplace Georgia',
            image: './assets/alice_walker_childhood_home.jpg',
            description: 'Description of the second location.',
            location: {
                center: [-83.5573651, 32.5573651], 
                zoom: 6.5,
                pitch: 60,
                bearing: -43.2,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'opening',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/color_purple_cover.jpg',
            description: 'This is where I insert a description of the novel',
            location: {
                center: [-90.3150946, 38.6605671],
                zoom: 4,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },

        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Olinka',
            image: './assets/firestone_farm.jpg',
            description: 'Description of the Olinka people',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 8.00,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'chapter-three',
            alignment: 'fully',
            hidden: false,
            title: 'End',
            image: './assets/color_purple_field.jpg',
            description: 'Close of the novel.',
            location: {
                center: [-41.47212410646295, 34.781162343274076], 
                zoom: 3,
                pitch: 30,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
