import React from 'react';

import secondBannerImgTopRight from '../../assets/home/background/bg-home-slide2_3.png';
import secondBannerImgCenter from '../../assets/home/background/bg-home-slide2_1.png';
import secondBannerImgBottom from '../../assets/home/background/bg-home-slide2_2.png';

const HomeImageSlider = () => {
    //let imgSlideDuration = 20;

    //setInterval(() => autoSlideImg(), 1000);

    // const autoSlideImg = () => {
    //     imgSlideDuration--;
    //     const firstBanner = document.querySelector(".banner__first");
    //     const secondBanner = document.querySelector(".banner__second");

    //     const firstBtnAction = document.querySelector(".first__btn--click");
    //     const secondBtnAction = document.querySelector(".second__btn--click");

    //     if(imgSlideDuration === 0) {
    //         if(firstBanner && secondBanner) {
    //             if(firstBanner.className.includes("hide--banner")) {
    //                 firstBanner.classList.remove("hide--banner");
    //                 secondBanner.classList.add("hide--banner");

    //                 secondBtnAction.classList.remove("selected__btn");
    //                 firstBtnAction.classList.add("selected__btn");

    //             }
    //             else if(secondBanner.className.includes("hide--banner")) {
    //                 secondBanner.classList.remove("hide--banner");
    //                 firstBanner.classList.add("hide--banner");

    //                 firstBtnAction.classList.remove("selected__btn");
    //                 secondBtnAction.classList.add("selected__btn");
    //             }
    //         }
    //         imgSlideDuration = 20;
    //     }
    // }

    // const btnSlideActionClick = e => {
    //     // const btnActionClassName = e.target.className;
    //     // const firstBanner = document.querySelector(".banner__first");
    //     // const secondBanner = document.querySelector(".banner__second");

    //     // const firstBtnAction = document.querySelector(".first__btn--click");
    //     // const secondBtnAction = document.querySelector(".second__btn--click");

    //     // if(firstBanner && secondBanner) {
    //     //     if(btnActionClassName.includes("first__btn--click")) {
    //     //         firstBanner.classList.remove("hide--banner");
    //     //         secondBanner.classList.add("hide--banner");

    //     //         secondBtnAction.classList.remove("selected__btn");
    //     //         firstBtnAction.classList.add("selected__btn");
    //     //     } else if(btnActionClassName.includes("second__btn--click")) {
    //     //         secondBanner.classList.remove("hide--banner");
    //     //         firstBanner.classList.add("hide--banner");

    //     //         firstBtnAction.classList.remove("selected__btn");
    //     //         secondBtnAction.classList.add("selected__btn");
    //     //     }
    //     // }

    //     // imgSlideDuration = 20;
    // }

    return(
        <div className="banner">
            {/* <div className="banner__first">
                <div className="banner__content">
                    <div className="banner__content--delivery">
                        <h4>Delivery in 24h</h4>
                    </div>
                    <div className="banner__content--title">
                        <h1>
                            <span>Organic Food </span>
                            <span>Everyday</span>
                        </h1>
                    </div>
                    <div className="banner__content--paragraph">
                        <p>Order today and recieve your packages tomorrow by efway</p>
                    </div>
                    <div className="banner__content--button">
                        <button>PURCHASE NOW</button>
                    </div>
                </div>
                <div className="banner__img__top-left">
                    <img src={firstBannerTopLeftImage} alt='Top Left'/>
                </div>
                <div className="banner__img__top-right">
                    <img src={firstBannerTopRightImage} alt="Top Right"/>
                </div>
                <div className="banner__img__bot-left">
                    <img src={firstBannerBotLeftImage} alt="Bottom Left"/>
                </div>
                <div className="banner__img--main">
                    <img src={firstBannerMainImage} alt="Main"/>
                </div>
            </div> */}
            <div className="banner__second">
                <div className="banner__content">
                    {/* <div className="banner__content--delivery">
                        <h4>Delivery in 24h</h4>
                    </div> */}
                    <div className="banner__content--title">
                        <h1>
                            <span>Thực Phẩm Chay </span>
                            <span>Mỗi Ngày</span>
                        </h1>
                    </div>
                    <div className="banner__content--paragraph">
                        <p>Đặt hàng hôm nay, nhận hàng vào ngày mai</p>
                    </div>
                    <div className="banner__content--button">
                        <button>Mua Ngay</button>
                    </div>
                </div>
                <div className="banner__img__top-right">
                    <img src={secondBannerImgTopRight} alt="Top Right"/>
                </div>
                <div className="banner__img__center">
                    <img src={secondBannerImgCenter} alt="Center"/>
                </div>
                <div className="banner__img__bottom">
                    <img src={secondBannerImgBottom} alt="Bottom"/>
                </div>
            </div>/
            {/* <div className="banner__action">
                <span
                    className="banner__action__btn selected__btn first__btn--click"
                    onClick={(e) => btnSlideActionClick(e)}
                >
                    <i className="fas fa-circle first__btn--click"/>
                </span>
                <span
                    className="banner__action__btn second__btn--click"
                    onClick={(e) => btnSlideActionClick(e)}
                >
                    <i className="fas fa-circle second__btn--click"/>
                </span>
            </div> */}
        </div>
    );
}

export default HomeImageSlider;
