import { useState } from "react";

export const GeneralL = ({ title }) => {


    const status = ["pending", "inprogress", "completed", "cancelled"];

    const [canShowText, setCanShowText] = useState(false);

    return (
        <div>
            {title}

            {
                status.map((val, index) => (
                    <div key={index}>
                        {
                            val === "completed" ?
                                <div>{index} - Completed</div> :
                                val === "pending" ?
                                    <div>{index} - Pending</div> :
                                    val === "inprogress" ?
                                        <div>{index} - In-Progress</div> :
                                        val === "cancelled" ?
                                            <div>{index} - Cancelled</div> :
                                            <div>{val}</div>
                        }

                        {
                            val === 1 ?
                                <div>One</div> :
                                val === 2 ?
                                    <div>Two</div> :
                                    <div>{val}</div>
                        }

                        {
                            val && <div>{val}</div>
                        }
                    </div>
                ))
            }

            {
                canShowText &&
                <div>Text is visible.......</div>
            }

            <button onClick={() => setCanShowText(!canShowText)}>
                Click me to display the content...
            </button>
        </div>
    )
}