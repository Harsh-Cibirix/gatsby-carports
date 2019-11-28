import React, { Component } from 'react'


class Principles extends Component {
    render() {
        return(
            <section class="section company-section">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-10">
                        <h3 class="section__title company-section__title">Company Values and Its principles (you dream
                            it, we build it)</h3>
                        <div class="company-section__grid values-principles-list">
                            <div class="values-principles-list__col">
                                <p class="values-principles-list__title">Values</p>
                                <p class="values-principles-list__value">Quality products and materials</p>
                                <p class="values-principles-list__value">Customer satisfaction</p>
                                <p class="values-principles-list__value">Customization</p>
                            </div>
                            <div class="values-principles-list__col">
                                <p class="values-principles-list__number">01</p>
                                <p class="values-principles-list__number">02</p>
                                <p class="values-principles-list__number">03</p>
                            </div>
                            <div class="values-principles-list__col">
                                <p class="values-principles-list__title">Principles</p>
                                <p class="values-principles-list__value">No cutting corners</p>
                                <p class="values-principles-list__value">Providing great customer service</p>
                                <p class="values-principles-list__value">Valuing our customer’s creativity</p>
                            </div>
                        </div>
                        <a href="#" class="btn btn_size-l section__btn company-section__btn">See More Detail</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default Principles