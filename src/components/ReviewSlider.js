import React, { Component } from 'react'

//Images
import customerImage from '../img/customer-img@2x.jpg'
import customerSectionImg2 from '../img/customer-section-img@2x.jpg'

class ReviewSlider extends Component{
    render(){
        return(
            <section class="section customer-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="section__title customer-section__title">Some of our featured buildings & Their happy
                            customers</h3>
                        <div class="customer-section__grid">
                            <picture>
                                <img class="customer-section__img" src={customerSectionImg2} alt="alt" />
                            </picture>
                            <div class="customer-item">
                                <p class="customer-item__text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text is
                                    ever since the, when an unknown printer took galley of type and scrambled it to
                                    make. . .</p>
                                <div class="customer-item__author">
                                    <picture>
                                        {/* <source srcset="img/customer-img.jpg 1x, img/customer-img@2x.jpg 2x" /> */}
                                        <img class="customer-item__author-img" src={customerImage} alt="alt" />
                                    </picture>
                                    <p class="customer-item__author-name">Emily Marcus</p>
                                    <p class="customer-item__author-position">Microso Founder, New York</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="btn btn_size-l section__btn customer-section__btn">View All Customers</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default ReviewSlider