var config = {
    style: 'mapbox://styles/jdinman/cmacuc0lm009301quhqjghfcr',
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
            id: 'thesis',
            alignment: 'centered',
            hidden: false,
            title: 'Black Movement and Purchases',
            image: './assets/south.jpeg',
            description: 'In this essay, I will be examining three novels from three different novels from different points in American history to investigate how these authors depict African-American movement within these novels, and compare that to the picture of African-American life painted by local color stories. Specifically, I will be looking at a possible relationship between Black economic progress, measured by purchases within the novel, and movement. These novels are <em>Their Eyes Were Watching God</em> by Zora Neale Hurston, <em>The Color Purple</em> by Alice Walker, and <em>Salvage The Bones</em> by Jesmyn Ward. ',
            location: {
                center: [-90.05579,35.15143],
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
            id: 'chapone',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: './assets/hurston.jpeg',
            description: 'Zora Neale Hurston’s novel <em>Their Eyes Were Watching God</em> follows Janie, a black woman seeking sexual and romantic fulfillment in the South. She has a sexual awakening under a pear tree in the beginning of the novel. Hurston writes, “She was stretched on her back beneath the pear tree soaking in the alto chant of the visiting bees, the gold of the sun and the panting breath of the breeze when the inaudible voice of it all came to her. She saw a dust-bearing bee sink into the sanctum of a bloom; the thousand sister-calyxes arch to meet the love embrace and the ecstatic shiver of the tree from root to tiniest branch creaming in every blossom and frothing with delight. So this was a marriage! She had been summoned to behold a revelation.”p. 11',
            location: {
                center: [-81.35517,28.53725], 
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
        },
         {
            id: 'chapone-cont',
            alignment: 'right',
            hidden: false,
            title: 'Their Eyes Were Watching God',
            image: './assets/hurston.jpeg',
            description: 'Hurston’s novel, published in 1937, deviates greatly from the local color stories of Thomas Nelson Page and Joel Chandler Harris, as Jeanie travels throughout the Florida peninsula. There are 25 unique instances of movement within the novel, ranging from North Florida to Fort Lauderdale. Along with the many instances of movement, there are 36 instances of purchases by Black characters. This is by far the most out of any of the novels. This in part due to Janie’s second husband owning a store in an all Black town. Still, there is a clear correlation between movement, and black purchases. ',
            location: {
                center: [-81.35517,28.53725], 
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
        },        
        {
            id: 'cp',
            alignment: 'centered',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/color_purple.jpeg',
            description: 'In Alice Walker’s novel <em>the Color Purple</em>, we follow the similar journey of Celie. Celie navigates the tumultuous life of a Black woman in the south in the early 20th century. She starts writing to God after her step father impregnates her twice when she is a teenager, and Celie is forced to give up her children. She is married off to a man who routinely abuses her, partially because he is in love with another woman named Shug Avery. Celie eventually meets Shug Avery and they start a relationship. <em>the Color Purple</em> is a novel focusing on Celie’s sexual and spiritual explorations as Black woman in the south, discussing the many intersections of sexuality, race, and gender. <em>The Color Purple</em> has the largest range of movement from Black characters out of any of the novels I will be discussing with 57, as Celie receives letters from her sister Nellie who travels to London and Liberia on missionary work.',
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
            id: 'cp-cont',
            alignment: 'right',
            hidden: false,
            title: 'The Color Purple',
            image: './assets/color_purple.jpeg',
            description: 'In <em>The Color Purple</em> There are 25 unique instances of Black characters making purchases, as Shug Avery is a successful singer who travels the country performing for audiences. Celie eventually starts sewing pants for Shug, who then wears them on stage which sparks people’s interest in the pants. Eventually, Cellie starts selling pants to make money. “Then Shug want two more pair just like the first. Then everybody in her band want some. Then orders start to come in from everywhere Shug sing. Pretty soon I’m swamp.” p. 212. This narrative is somewhat similar to <em>Their Eyes Were Watching God</em>, as Celie grows up in poverty and gains some economic independence later in life. With this economic independence comes increased movement within the novel.',
            location: {
                center: [-83.63465,32.83464], 
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
        },
        {
            id: 'chapter-two',
            alignment: 'left',
            hidden: false,
            title: 'Liberia',
            image: '',
            description: 'Brief example of the mobility of <em>The Color Purple</em>',
            location: {
                center: [-10.378889436404226, 6.251275915595865], 
                zoom: 3.50,
                pitch: 45.0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stb',
            alignment: 'fully',
            hidden: false,
            title: 'Salvage The Bones',
            image: './assets/stb.jpeg',
            description: 'Jesmyn Ward’s 2011 novel, <em>Salvage The Bones</em> follows Esch, a Black teenager navigating an unwanted pregnancy. The story follows Esch’s family as they prepare for Hurricane Katrina and the devastation that will follow. Esch’s sister Skeetah owns a Pitbull that he dogfights named China, and the book opens with China giving birth to multiple pups. China’s motherhood in many ways parallels Esch’s, with both navigating the trials and tribulations of motherhood.',
            location: {
                center: [-89.09330,30.40415], 
                zoom: 6.5,
                pitch: 60,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'stb-cont',
            alignment: 'right',
            hidden: false,
            title: 'Salvage The Bones',
            image: './assets/stb.jpeg',
            description: 'In  <em>Salvage The Bones</em>, Esch’s family never reaches the same economic freedom that is reached by Janie and Celie. Her father is an alcoholic and does not have a job, and their car is broken down limiting their mobility. This leads them to alternative methods for attempting to escape their economic position. All instances of mobility are either by foot, or having to get their friend Big Henry to drive them places. This means that there are only 27 instances of mobility in the novel. Of these few instances of movement, they only are in a 31 mile range, that between De Lisle, Mississippi and Martins Pine Hill Estates, Mississippi. Likewise, there are only 18 instances of African-Americans making purchases in the novel.',
            location: {
                center: [-89.09330,30.40415], 
                zoom: 10.0,
                pitch: 0,
                bearing: 60
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'final',
            alignment: 'centered',
            hidden: false,
            title: 'Power and Limitaions',
            image: './assets/south.jpeg',
            description: 'The narrative created by local color stories, that of stagnant African-Americans entrenched to the landscape, is largely not one shared by later Black authors in Southern literature, specifically the works of Hurston and Walker, who depict extremely mobile Black characters. The mobility of the characters of Hurston and Walker are in part due to the fact that they reach economic stability, allowing them modes of transportation not granted to that of Ward’s characters. Hopefully this data was able to show the correlation between purchases by Black characters, and Black mobility within the novel. This thesis relies heavily on the positive correlation between mobility and economic means. I could think of several reasons why this correlation exists, for example, in <em>Salvage The Bones</em> they can not afford a car which means that their mobility is limited, and in <em>The Color Purple</em>, Celie’s mobility is limited before she becomes economically stable. While this correlation is apparent in the data, this correlation does not necessarily indicate a causal relationship.',
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
    ]
};
