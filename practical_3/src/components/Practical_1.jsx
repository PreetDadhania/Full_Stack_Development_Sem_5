import React from "react";
class Practical_1 extends React.Component {
    constructor(props) {
        super(props);
        this.dateRef = null;
        this.timeRef = null;

        // Start the interval
        setInterval(() => {
            const now = new Date();
            const formattedDate = `${now.getMonth() + 1}/${now.getDate()}/${now.getFullYear()}`;
            const formattedTime = now.toLocaleTimeString();

            if (this.dateRef) this.dateRef.textContent = `It is ${formattedDate}`;
            if (this.timeRef) this.timeRef.textContent = `It is ${formattedTime}`;
        }, 1000);

    }

    render() {
        return (
            <div style={{ textAlign: "center", marginTop: "100px", fontSize: "2rem" }}>
                <h1>
                    <strong>
                        Welcome to <span style={{ color: "navy" }}>CHARUSAT!!!!</span>
                    </strong>
                </h1>
                <p><strong ref={(el) => (this.dateRef = el)}>It is loading date...</strong></p>
                <p><strong ref={(el) => (this.timeRef = el)}>It is loading time...</strong></p>
            </div>
        )
    }
}

export default Practical_1;
