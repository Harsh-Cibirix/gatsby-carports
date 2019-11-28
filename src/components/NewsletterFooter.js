import React, { Component } from "react"

class NewsletterFooter extends Component {
    render(){
        return(
            <div class="newsletter">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="newsletter__grid">
                            <p class="newsletter__note">To get all the info on Infinity Carports exciting offers &
                                knowledgeable articles, please
                                subscribe our newsletter!!</p>
                            <form class="newsletter__form">
                                <input type="text" inputmode="email" placeholder="Enter Your Email Address…" name="s"
                                    class="newsletter__form-input" />
                                <button type="button" class="newsletter__form-btn">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                        viewBox="0 0 18.468 18">
                                        <path id="Path_336" data-name="Path 336"
                                            d="M18.274,14.353a1.935,1.935,0,0,0-.9-.9L2.778,6.391a1.935,1.935,0,0,0-2.64,2.46L2.677,15.2.139,21.541A1.935,1.935,0,0,0,2.778,24l14.6-7.066A1.935,1.935,0,0,0,18.274,14.353ZM2.217,22.84a.645.645,0,0,1-.88-.82l2.471-6.179H16.682Zm1.592-8.289L1.337,8.372a.645.645,0,0,1,.88-.818l14.465,7Z"
                                            transform="translate(0 -6.197)" fill="#42588f" />
                                    </svg> */}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsletterFooter