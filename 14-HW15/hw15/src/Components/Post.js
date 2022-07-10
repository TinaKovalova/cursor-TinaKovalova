import '../Styles/Post.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMessage, faHeart, faRetweet, faShare, faB} from '@fortawesome/free-solid-svg-icons'
import {faCheckCircle} from '@fortawesome/free-regular-svg-icons'

export default function Post({author, content, image, date}) {
    const {name, photo, nickname} = author;
    return (
        <div className='post d-flex'>
            <img src={photo} className='photo'/>
            <div className='content d-flex'>
                <div>
                    <h3>{name}</h3>
                    <FontAwesomeIcon icon={faCheckCircle}/>
                    <span>{nickname} - {date}</span>
                </div>
                <p>{content}</p>
                <img src={image} className='content-image'/>
                <div className='d-flex post-menu'>
                    <div>
                        <FontAwesomeIcon icon={faMessage}/>
                        <label>482</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faRetweet}/>
                        <label>146</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faHeart}/>
                        <label>887</label>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faShare}/>
                    </div>
                </div>
            </div>
        </div>
    )
}