import data from "./data/data.json"

export const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8.2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1780,
            settings: {
                slidesToShow: 7,
            }
        },
        {
            breakpoint: 1580,
            settings: {
                slidesToShow: 6,
            }
        },
        {
            breakpoint: 1300,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
            }
        }
    ]
};

export function addIDToSessionStorage(Id){
    const list = JSON.parse(sessionStorage.getItem('movies')) || [];
    if(!list.includes(Id)){
        list.push(Id);
    }
    sessionStorage.setItem('movies', JSON.stringify(list));
}

export function getData (){
    const tendingNow = [...data.TendingNow];
    const listIds = JSON.parse(sessionStorage.getItem('movies')) || [];
    const listData = [];

    tendingNow.sort((prev, next)=> {
        let prevDate = new Date(prev.Date).getTime();
        let nextDate = new Date(next.Date).getTime();
        return nextDate - prevDate
    });

    if(listIds.length){
        listIds.forEach(Id => {
            listData.push(tendingNow.find(item => item.Id === Id))
        })
    }

    const result = {
        Featured: data.Featured,
        TendingNow: new Set([...listData, ...tendingNow])
    }
    
    return result
}