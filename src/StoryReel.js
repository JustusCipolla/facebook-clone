import React from 'react';
import './StoryReel.css';
import Story from './Story';

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
            image="https://i.pinimg.com/564x/4b/6f/ec/4b6fec352ad65acf6c1265201432dfa1.jpg"
            profileSrc="https://qph.fs.quoracdn.net/main-qimg-134e3bf89fff27bf56bdbd04e7dbaedf.webp"
            title="Morgan Freeman"
            />
            <Story 
            image="https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop"
            profileSrc="https://pbs.twimg.com/media/DZotU1hW0AEDN5F.jpg:large"
            title="Steven Lorangg"
            />
            <Story 
            image="https://www.iahsaa.org/wp-content/uploads/2020/03/Football-A-2019-3.26.20-1080x675.jpg"
            profileSrc="https://i1.wp.com/metro.co.uk/wp-content/uploads/2015/07/daniel.jpeg?quality=90&strip=all&zoom=1&resize=540%2C540&ssl=1"
            title="Michael Westera"
            />
            <Story 
            image="https://esmmweighless.com/wp-content/uploads/2019/12/Carolyn-Cooking-Blog.jpg"
            profileSrc="https://4.bp.blogspot.com/_Cm7RILBShPs/TPaah8e5CnI/AAAAAAAACls/wun7WqsGCU0/s1600/DSC07808W.jpg"
            title="Marsha Tonixaz."
            />
            <Story 
            image="https://media.wired.com/photos/5a593a7ff11e325008172bc2/16:9/w_2400,h_1350,c_limit/pulsar-831502910.jpg"
            profileSrc="https://static.tvtropes.org/pmwiki/pub/images/abcb6534_7913_4eb1_a7a5_62b081ebc628.png"
            title="THE Rick Sanchez"
            />
        </div>
    )
}

export default StoryReel;
