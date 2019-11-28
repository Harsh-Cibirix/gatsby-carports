import React, { Component } from 'react'

import blogImg1 from "../img/article-img-1@2x.jpg"
import blogImg2 from "../img/article-img-2@2x.jpg"
import blogImg3 from "../img/article-img-3@2x.jpg"
import blogImg4 from "../img/article-img-4@2x.jpg"

class FeaturedBlog extends Component{
    render(){
        return(
            <section class="section articles-section">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h3 class="section__title articles-section__title">Some featured articles to help our customer.
                            Choosing the right building</h3>
                        <div class="row">
                            <div class="col-3 articles-section__col">
                                <div class="article-item">
                                    <a href="#" class="article-item__img">
                                        <picture>
                                            <img src={blogImg1} alt="alt" />
                                        </picture>
                                    </a>
                                    <div class="article-item__grid">
                                        <a href="#" class="article-item__title">Best roof style for Texas Lorem
                                            Ipsum</a>
                                        <div class="article-item__text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting
                                                industry lorem Ipsum has been the industry’s standard dummy text ever
                                                since the when an unknown…<a href="#">Read more</a></p>
                                        </div>
                                        <p class="article-item__date">2 month ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 articles-section__col">
                                <div class="article-item">
                                    <a href="#" class="article-item__img">
                                        <picture>
                                            <img src={blogImg2} alt="alt" />
                                        </picture>
                                    </a>
                                    <div class="article-item__grid">
                                        <a href="#" class="article-item__title">Best roof style for Texas Lorem
                                            Ipsum</a>
                                        <div class="article-item__text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting
                                                industry lorem Ipsum has been the industry’s standard dummy text ever
                                                since the when an unknown…<a href="#">Read more</a></p>
                                        </div>
                                        <p class="article-item__date">2 month ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 articles-section__col">
                                <div class="article-item">
                                    <a href="#" class="article-item__img">
                                        <picture>
                                            <img src={blogImg3} alt="alt" />
                                        </picture>
                                    </a>
                                    <div class="article-item__grid">
                                        <a href="#" class="article-item__title">Best roof style for Texas Lorem
                                            Ipsum</a>
                                        <div class="article-item__text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting
                                                industry lorem Ipsum has been the industry’s standard dummy text ever
                                                since the when an unknown…<a href="#">Read more</a></p>
                                        </div>
                                        <p class="article-item__date">2 month ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-3 articles-section__col">
                                <div class="article-item">
                                    <a href="#" class="article-item__img">
                                        <picture>
                                            <img src={blogImg4} alt="alt" />
                                        </picture>
                                    </a>
                                    <div class="article-item__grid">
                                        <a href="#" class="article-item__title">Best roof style for Texas Lorem
                                            Ipsum</a>
                                        <div class="article-item__text">
                                            <p>Lorem Ipsum is simply dummy text of the printing and type setting
                                                industry lorem Ipsum has been the industry’s standard dummy text ever
                                                since the when an unknown…<a href="#">Read more</a></p>
                                        </div>
                                        <p class="article-item__date">2 month ago</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12">
                                <a href="#" class="btn btn_size-l section__btn articles-section__btn">View All
                                    Articles</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        )
    }
}

export default FeaturedBlog