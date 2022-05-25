import React, { useState } from 'react'
import './Scroll.css'
import { Waypoint } from 'react-waypoint'
import { useSpring, animated } from 'react-spring'

export default function SCROLL() {

    const [toggleTxt, setToglleTxt] = useState(false)

    const animation = useSpring({
        opacity: toggleTxt ? 1 : 0,
        transform: toggleTxt ? "translateX(0" : "translateX(-50%)"
    })

    return (
        <div>
            <p className="scroll-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo aspernatur neque, iusto at laborum? Minima, animi beatae a explicabo inventore, nemo ea sit ratione nesciunt error commodi fugit atque quos omnis repudiandae quas dolore nam distinctio quasi? Omnis saepe nisi blanditiis quasi tenetur soluta magnam nesciunt unde atque eligendi? Eligendi incidunt atque aliquid distinctio quas, qui sint repudiandae error recusandae? Quis mollitia ex alias ab, facilis tempora sint id molestias magni quisquam explicabo numquam dolores eius iste aliquam aspernatur dolore repellendus? Explicabo dignissimos, labore error vitae debitis ipsa similique sed eius quidem neque consequatur cupiditate architecto doloribus, cumque nulla aspernatur in officia nesciunt saepe dicta. Corporis tenetur harum eum ad fugit adipisci nam maxime quisquam, illo dolore, quas facilis quo iusto quod tempora explicabo aut labore eveniet odio sequi delectus quis? Soluta blanditiis voluptatibus cumque quis tenetur dolor voluptatum totam, rem facere magni earum possimus laudantium nihil consequatur laboriosam accusantium officiis reiciendis veritatis veniam quos explicabo suscipit, doloremque excepturi fugiat. Asperiores veritatis dicta aspernatur nam placeat inventore, voluptatibus quidem officia, quae eius deserunt consequuntur perspiciatis rerum quis sint at sapiente exercitationem veniam atque! Fuga nisi nulla eaque accusantium ipsum ea repellat, vel maxime repellendus odio, officiis velit quam cupiditate!
            </p>
            <p className="scroll-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo aspernatur neque, iusto at laborum? Minima, animi beatae a explicabo inventore, nemo ea sit ratione nesciunt error commodi fugit atque quos omnis repudiandae quas dolore nam distinctio quasi? Omnis saepe nisi blanditiis quasi tenetur soluta magnam nesciunt unde atque eligendi? Eligendi incidunt atque aliquid distinctio quas, qui sint repudiandae error recusandae? Quis mollitia ex alias ab, facilis tempora sint id molestias magni quisquam explicabo numquam dolores eius iste aliquam aspernatur dolore repellendus? Explicabo dignissimos, labore error vitae debitis ipsa similique sed eius quidem neque consequatur cupiditate architecto doloribus, cumque nulla aspernatur in officia nesciunt saepe dicta. Corporis tenetur harum eum ad fugit adipisci nam maxime quisquam, illo dolore, quas facilis quo iusto quod tempora explicabo aut labore eveniet odio sequi delectus quis? Soluta blanditiis voluptatibus cumque quis tenetur dolor voluptatum totam, rem facere magni earum possimus laudantium nihil consequatur laboriosam accusantium officiis reiciendis veritatis veniam quos explicabo suscipit, doloremque excepturi fugiat. Asperiores veritatis dicta aspernatur nam placeat inventore, voluptatibus quidem officia, quae eius deserunt consequuntur perspiciatis rerum quis sint at sapiente exercitationem veniam atque! Fuga nisi nulla eaque accusantium ipsum ea repellat, vel maxime repellendus odio, officiis velit quam cupiditate!
            </p>
            <Waypoint 
            onEnter = {() => {
                if(!toggleTxt){
                    setToglleTxt(true)
                }
            }}
            />
            <animated.div style ={animation} className='cta-section'>
                <h2>N'en ratez pas une miette !</h2>
                <form>
                    <label htmlFor="email">Inscrivez-vous à la newsletter</label>
                    <input type="email" id="email" />
                </form>
            </animated.div>
            <p className="scroll-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo aspernatur neque, iusto at laborum? Minima, animi beatae a explicabo inventore, nemo ea sit ratione nesciunt error commodi fugit atque quos omnis repudiandae quas dolore nam distinctio quasi? Omnis saepe nisi blanditiis quasi tenetur soluta magnam nesciunt unde atque eligendi? Eligendi incidunt atque aliquid distinctio quas, qui sint repudiandae error recusandae? Quis mollitia ex alias ab, facilis tempora sint id molestias magni quisquam explicabo numquam dolores eius iste aliquam aspernatur dolore repellendus? Explicabo dignissimos, labore error vitae debitis ipsa similique sed eius quidem neque consequatur cupiditate architecto doloribus, cumque nulla aspernatur in officia nesciunt saepe dicta. Corporis tenetur harum eum ad fugit adipisci nam maxime quisquam, illo dolore, quas facilis quo iusto quod tempora explicabo aut labore eveniet odio sequi delectus quis? Soluta blanditiis voluptatibus cumque quis tenetur dolor voluptatum totam, rem facere magni earum possimus laudantium nihil consequatur laboriosam accusantium officiis reiciendis veritatis veniam quos explicabo suscipit, doloremque excepturi fugiat. Asperiores veritatis dicta aspernatur nam placeat inventore, voluptatibus quidem officia, quae eius deserunt consequuntur perspiciatis rerum quis sint at sapiente exercitationem veniam atque! Fuga nisi nulla eaque accusantium ipsum ea repellat, vel maxime repellendus odio, officiis velit quam cupiditate!
            </p>
            <p className="scroll-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo aspernatur neque, iusto at laborum? Minima, animi beatae a explicabo inventore, nemo ea sit ratione nesciunt error commodi fugit atque quos omnis repudiandae quas dolore nam distinctio quasi? Omnis saepe nisi blanditiis quasi tenetur soluta magnam nesciunt unde atque eligendi? Eligendi incidunt atque aliquid distinctio quas, qui sint repudiandae error recusandae? Quis mollitia ex alias ab, facilis tempora sint id molestias magni quisquam explicabo numquam dolores eius iste aliquam aspernatur dolore repellendus? Explicabo dignissimos, labore error vitae debitis ipsa similique sed eius quidem neque consequatur cupiditate architecto doloribus, cumque nulla aspernatur in officia nesciunt saepe dicta. Corporis tenetur harum eum ad fugit adipisci nam maxime quisquam, illo dolore, quas facilis quo iusto quod tempora explicabo aut labore eveniet odio sequi delectus quis? Soluta blanditiis voluptatibus cumque quis tenetur dolor voluptatum totam, rem facere magni earum possimus laudantium nihil consequatur laboriosam accusantium officiis reiciendis veritatis veniam quos explicabo suscipit, doloremque excepturi fugiat. Asperiores veritatis dicta aspernatur nam placeat inventore, voluptatibus quidem officia, quae eius deserunt consequuntur perspiciatis rerum quis sint at sapiente exercitationem veniam atque! Fuga nisi nulla eaque accusantium ipsum ea repellat, vel maxime repellendus odio, officiis velit quam cupiditate!
            </p>
            <p className="scroll-txt">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi nemo aspernatur neque, iusto at laborum? Minima, animi beatae a explicabo inventore, nemo ea sit ratione nesciunt error commodi fugit atque quos omnis repudiandae quas dolore nam distinctio quasi? Omnis saepe nisi blanditiis quasi tenetur soluta magnam nesciunt unde atque eligendi? Eligendi incidunt atque aliquid distinctio quas, qui sint repudiandae error recusandae? Quis mollitia ex alias ab, facilis tempora sint id molestias magni quisquam explicabo numquam dolores eius iste aliquam aspernatur dolore repellendus? Explicabo dignissimos, labore error vitae debitis ipsa similique sed eius quidem neque consequatur cupiditate architecto doloribus, cumque nulla aspernatur in officia nesciunt saepe dicta. Corporis tenetur harum eum ad fugit adipisci nam maxime quisquam, illo dolore, quas facilis quo iusto quod tempora explicabo aut labore eveniet odio sequi delectus quis? Soluta blanditiis voluptatibus cumque quis tenetur dolor voluptatum totam, rem facere magni earum possimus laudantium nihil consequatur laboriosam accusantium officiis reiciendis veritatis veniam quos explicabo suscipit, doloremque excepturi fugiat. Asperiores veritatis dicta aspernatur nam placeat inventore, voluptatibus quidem officia, quae eius deserunt consequuntur perspiciatis rerum quis sint at sapiente exercitationem veniam atque! Fuga nisi nulla eaque accusantium ipsum ea repellat, vel maxime repellendus odio, officiis velit quam cupiditate!
            </p>
        </div>
    )
}
