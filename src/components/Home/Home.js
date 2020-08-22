import React, { Component } from 'react'
import styles from './home.module.scss'
import {withRouter} from 'react-router-dom'
class Home extends Component {
    constructor(props){
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div>
                <div className={styles.smart_home}>
                    <header className={styles.smart_home_logo}>
                        <figure className={styles.logo}></figure>
                    </header>
                    <section className={styles.search_bar_warp}>
                        <div className={styles.search_bar_middle}>
                            <div className={styles.search_inner} onClick={()=>{
                                    this.props.history.push('/search')
                                }}>
                                <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANRSURBVHgB7ZpPaxRBEMWf0aAGklX24CIR0YOCOSSIHvzoHgVRRBA9iRERiQfjn0AUDLoi9mNmcNNbs7Pb/XqWhfpBkdCzO9vzurqqu3oAx3Ecx3Ecx3EcPWfQLxvBNoOtT7SNg50E+44lUloIPvAw2CjYFZwWwOJbsINgR8F+okdKCcEHvlFb18O3QUHeoidBSghBD9gLdhEa9msrilqIHVReoIYx5CkKeodSiN1g12ZcZ1A8DHaM6sHGdTs9Z4DKk7ZmfL+oGCohZonAALhf/+2CotwOtt1yvZgYCiFu1RbDzr7CfALEUJD7sD2EYjwK9gdCziIPjtyO0c41wTOkrw34kB/q/4fRNWahtWBfICRXCI5anB7pCY+D/UY+jTfFYlyur51AxBrS4XSIUyRF4BxWui3jyyHs35eRI4QVHNlp2ShN8BL/s0zDENOekkyqEIwNsTfQVT+iDBThvdEu84pUIUZGW+nVH4WIvYJZ5RwEpAoRuyRjQ0qaXASKEHscA/UAAlKEGGA6UxyhHyyxtyAgRQjLFY/RD9bvLM0jrF1lX0UVKyMtNUYsk3ifkVrvOMUqCrGBAqiEKNI5A2v0xxCQIsQPo20T/WBlCEl8ShHCqgVIIvccWEJIMlaKEHTFOJ93VZdU3DTaluYR5JPRNkJZKLa1v5Fs8lKFsDZXLNqWDJp7RtsBRKQK0bbu30UZ2mofst1uTvp8Y7TRfe9AC+9pbbelu92cUl1ThbLKaESxG+W972G6n01hWEZuzZIPyyB5PmpvAhvXHKkLHsacu7D7yGkoPTjOFYJ8RiVGvOob1O0UYpEON0eG1zs+x3vLxFAd8HD0H6A9a7DDX1GlXdYuJr2EAnINMkRaHZJTJDt7KI/8usSI4Txfh2b3mC2GYmo0MHgynV3AfKvM9Tl/n67/GpWntH0+e5oohSB/Ubk/O3QJeaPN6fMu2Iv6fjzZuopCYpR+Y4ajyPOP7QW+w0xEMenq8UERPY3Tb5bASdOkz3eomo0Zs8nkKrF5RYC7SArQdUpWRIy+XyZT0SUGhX2IBVjFUh1hHOAZa9tibeFVrTpY9skv2AGUIj1HFbjnZpWFILEYFOEJxC+RrBIMvsxMkjMOx3Ecx3Ecx3EcFf8A6SChkbMgmJkAAAAASUVORK5CYII='></img>
                                <span className={styles.defaults_words}>
                                    请输入关键字
                                </span>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}
export default withRouter(Home)