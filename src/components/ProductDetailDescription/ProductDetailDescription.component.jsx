import React from "react";
import './ProductDetailDescription.styled.scss';

class ProductDetailDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: '1',
            review: [
                {
                    id: 1,
                    name: 'CHUNG PHAM',
                    content: 'I am 6 feet tall and 220 lbs. This shirt fit me perfectly in the chest and shoulders. My only complaint is that it is so long! I like to wear polo shirts untucked. This shirt goes completely past my rear end. If I wore it with ordinary shorts, you probably wouldnt be able to see the shorts at all – completely hidden by the shirt. It needs to be 4 to 5 inches shorter in terms of length to suit me. I have many RL polo shirts, and this one is by far the longest. I dont understand why.',
                    date: 'July 7, 2020'
                },
                {
                    id: 2,
                    name: 'KENNETH R. MYERS',
                    content: 'The shirt was not the fabric I believed it to be. It says Classic Fit but was made like the older versions, not the soft cotton like my others. I don’t understand how the labels are the same but a completely different shirt. Oh well, stuck with it now.',
                    date: 'July 8, 2020'
                },
                {
                    id: 3,
                    name: 'MIKE ADDINGTON',
                    content: 'Real authentic genuine quality however it fit me like an XL size when In fact Im L. Beware',
                    date: 'July 9, 2020'
                },
                {
                    id: 4,
                    name: 'ERVIN ARLINGTON',
                    content: 'The Ralph Lauren quaility is here in abundance. My husband always says that the Lauren polos fit better and last longer than any other brand.I love the new “heathered” color and the price is always excellent through shop',
                    date: 'July 10, 2020'
                },
                {
                    id: 5,
                    name: 'PATRICK M. NEWMAN',
                    content: 'My son loved this Jacket for his Senior Prom… He got sooo many compliments! He is slim build 5’11 and 150lbs … I ordered a large … it was a little big … but it was fine!',
                    date: 'July 11, 2020'
                }
            ]
        }
    }

    tabHeaderClick = (e, tabIdx) => {
        const currentTab = e.target;
        const selectedTabHeader = document.querySelector(".selected--tab--header");

        if(selectedTabHeader) {
            selectedTabHeader.classList.remove("selected--tab--header");
        }

        this.setState(() => {
            return {
                tabIndex: tabIdx
            }
        })
        currentTab.classList.add("selected--tab--header");
    }

     renderDescription = () => {
        return (
            <div className="description__body__desc">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam fringilla augue nec est tristique auctor.
                    Donec non est at libero vulputate rutrum.
                    Morbi ornare lectus quis justo gravida semper.
                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                </p>
                <p>
                    Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat sem,
                    quis fermentum turpis eros eget velit. Donec ac tempus ante.
                    Fusce ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
                    sapien libero hendrerit est, sed commodo augue nisi non neque.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Sed tempor, lorem et placerat vestibulum, metus nisi posuere nisl,
                    in accumsan elit odio quis mi. Cras neque metus, consequat et blandit et,
                    luctus a nunc. Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
                </p>
                <ul>
                    <li>Mauris vel tellus non nunc mattis lobortis</li>
                    <li>Suspendisse aliquet urna pretium eros convallis</li>
                    <li>Vestibulum ante ipsum primis in faucibus</li>
                    <li>Fusce ultricies massa massa</li>
                </ul>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nam fringilla augue nec est tristique auctor.
                    Donec non est at libero vulputate rutrum.
                    Morbi ornare lectus quis justo gravida semper.
                    Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id nulla.
                    Donec a neque libero. Pellentesque aliquet, sem eget laoreet ultrices,
                    ipsum metus feugiat sem, quis fermentum turpis eros eget velit.
                    Donec ac tempus ante. Fusce ultricies massa massa.
                    Mauris vel tellus non nunc mattis lobortis. vulputate adipiscing cursus eu,
                    suscipit id nulla. Donec a neque libero. Pellentesque aliquet,
                    sem eget laoreet ultrices, ipsum metus feugiat sem,
                    quis fermentum turpis eros eget velit. Donec ac tempus ante.
                </p>
            </div>
        )
    }

    renderAdditionInformation = () => {
        return (
            <div className="description__body__addition">
                <table>
                    <tr>
                        <th>Stand Up</th>
                        <td>
                            35″L x 24″W x 37-45″H(front to back wheel)
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Folded (w/o wheels)
                        </th>
                        <td>
                            32.5″L x 18.5″W x 16.5″H
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Folded (w/ wheels)
                        </th>
                        <td>
                            32.5″L x 24″W x 18.5″H
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Door Pass Through
                        </th>
                        <td>
                            24
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Frame
                        </th>
                        <td>
                            Aluminum
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Weight (w/o wheels)
                        </th>
                        <td>
                            20 LBS
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Weight Capacity
                        </th>
                        <td>
                            60 LBS
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Width
                        </th>
                        <td>
                            24″
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Handle height (ground to handle)
                        </th>
                        <td>
                            37-45″
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Wheels
                        </th>
                        <td>
                            12″ air / wide track slick tread
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Seat back height
                        </th>
                        <td>
                            21.5″
                        </td>
                    </tr>
                    <tr>
                        <th>
                            Head room (inside canopy)
                        </th>
                        <td>
                            25″
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    renderReviews = () => {
        const {review} = this.state;

        return (
            <div className="description__body__review">
                {
                    review.map((r, idx) => {
                        return (
                            <div key={idx} className="body__review__detail">
                                <div className="review__detail__date-rating">
                                    <div className="review__detail__rating">
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                        <span/>
                                    </div>
                                    <div className="review__detail__date">
                                        <span>{r.date}</span>
                                    </div>
                                </div>
                                <div className="review__detail__text">
                                    <p>
                                        {r.content}
                                    </p>
                                </div>
                                <div className="review__detail__name">
                                    <span>{r.name}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    render() {
        return (
            <div className="product-detail__description__container">
                <div className="product-detail__description__header">
                    <span
                        className="selected--tab--header"
                        onClick={(e) => this.tabHeaderClick(e, '1')}
                    >
                        DESCRIPTION
                    </span>
                    <span
                        onClick={(e) => this.tabHeaderClick(e, '2')}
                    >
                        ADDITIONAL INFORMATION
                    </span>
                    <span
                        onClick={(e) => this.tabHeaderClick(e, '3')}
                    >
                        REVIEWS
                    </span>
                </div>
                <div className="product-detail__description__body">
                    {
                        this.state.tabIndex === '1'
                            ? this.renderDescription()
                            : this.state.tabIndex === '2'
                            ? this.renderAdditionInformation()
                            : this.renderReviews()
                    }
                </div>
            </div>
        );
    }
}

export default ProductDetailDescription;
