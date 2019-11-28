import React, { Component } from 'react'

import IconDiscount from '../img/icons/icon-discount.svg'
import IconLeadTime from '../img/icons/icon-best-lead-time.svg'
import IconPrice from '../img/icons/icon-price-matching.svg'
import IconQuality from '../img/icons/icon-quality.svg'
import IconTech from '../img/icons/icon-latest-technology.svg'
import IconCustomer from '../img/icons/icon-best-customer.svg'

class Usp extends Component {
    render() {
        return(
            <section class="section leading-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <h2 class="section__title section__title_color-w leading-section__title">Leading Manufacturer of
                            Metal Buildings</h2>
                        <p class="section__desc section__desc_color-w">Infinity Carports Inc. brings over 15 years of
                            experience installing
                            steel structures of multiple sizes and styles that are built to last and protect what you
                            put under them. Infinity Carports Inc. will install Carports, RV-Covers, Utility Buildings,
                            Garages, and Barns. Each design can be constructed with 14 Gauge or 12 Gauge galvanized
                            steel framing. Need something special? Infinity Carports Inc.</p>
                        <div class="leading-section__grid">
                            <div class="leading-section__item">
                                <IconPrice />
                                <p class="leading-section__item-name">Price matching capabilities</p>
                            </div>
                            <div class="leading-section__item">
                                <IconQuality />
                                <p class="leading-section__item-name">Quality materials</p>
                            </div>
                            <div class="leading-section__item">
                                <IconCustomer />
                                <p class="leading-section__item-name">Best customer service</p>
                            </div>
                            <div class="leading-section__item">
                                <IconLeadTime />
                                <p class="leading-section__item-name">Best Lead Time & Professional Installers</p>
                            </div>
                            <div class="leading-section__item">
                                <IconDiscount/>
                                <p class="leading-section__item-name">Veteran / Military Discount</p>
                            </div>
                            <div class="leading-section__item">
                                <IconTech/>
                                <p class="leading-section__item-name">Latest Technology in Manufacturing</p>
                            </div>
                        </div>
                        <a href="#" class="btn btn_size-l section__btn leading-section__btn">See More Detail</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Usp;