import data from "./data/data.json"

export function addIDToSessionStorage(Id){
    //  ðï¸ CHECK, SESSION STORAGE IS INCLUDING ITEMS
    const list = JSON.parse(sessionStorage.getItem('movies')) || [];

    if(!list.includes(Id)){
        //  ðï¸IF LIST NOT CONTAINED,  ADD FRONT
        list.unshift(Id);
    }else{
        //  ðï¸IF CONTAINED MOVE TO FRONT
        const index = list.indexOf(Id);
        list.splice(index, 1);
        list.unshift(Id);
    }
    //  ðï¸  END ADD NEW LIST TO SESSION STORAGE
    sessionStorage.setItem('movies', JSON.stringify(list));
}

export function getData (){
    // ðï¸ TAKE TendingNow FROM JSON FILE
    const tendingNow = [...data.TendingNow];
    //  ðï¸ CHECK, SESSION STORAGE IS INCLUDING ITEMS
    const listIds = JSON.parse(sessionStorage.getItem('movies')) || [];
    const listData = [];

    //  ðï¸  SORT BY LAST ADDED
    tendingNow.sort((prev, next)=> {
        let prevDate = new Date(prev.Date).getTime();
        let nextDate = new Date(next.Date).getTime();
        return nextDate - prevDate
    });

    if(listIds.length){
        //  IF SESSION STORAGE INCLUDES ITEMS, THE PUSH TO listData
        listIds.forEach(Id => {
            listData.push(tendingNow.find(item => item.Id === Id))
        })
    }

    const result = {
        Featured: data.Featured,
        // CRETE A NEW SET, FIRST ITEMS FROM SESSION STORAGE, AND THEN SORTED
        TendingNow: new Set([...listData, ...tendingNow])
    }

    return result
}

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
