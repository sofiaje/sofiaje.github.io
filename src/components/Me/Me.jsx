import classes from "./me.module.scss"

const Me = () => {
    return ( 
        <section>
            <div className={classes.wrapper}>
                <div className="contentWrapper">
                    <h2>Who am i ?</h2>
                    <div className={classes.flex}>
                        <div>img</div>
                        <div>text</div>
                    </div>
                </div>
            </div>
        </section>
     );
}
export default Me;