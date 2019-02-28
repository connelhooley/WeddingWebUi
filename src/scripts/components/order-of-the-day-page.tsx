import React from "react";

export function OrderOfTheDayPage(): JSX.Element {
    return (
        <div id="order-of-the-day-page">
            <h1>Order Of The Day</h1>
            <table>
                <tr>
                    <td className="time">12.00pm</td>
                    <td className="description">Wedding ceremony</td>
                </tr>
                <tr>
                    <td className="time">12.40pm</td>
                    <td className="description">Welcome drinks and canapes</td>
                </tr>
                <tr>
                    <td className="time">3.00pm</td>
                    <td className="description">All guests to be seated</td>
                </tr>
                <tr>
                    <td className="time">3.15pm</td>
                    <td className="description">Speeches </td>
                </tr>
                <tr>
                    <td className="time">3.45pm</td>
                    <td className="description">Wedding breakfast</td>
                </tr>
                <tr>
                    <td className="time">6.30pm</td>
                    <td className="description">Glitter bar (until 8.30pm)</td>
                </tr>
                <tr>
                    <td className="time">7.30pm</td>
                    <td className="description">Evening guests arrive</td>
                </tr>
                <tr>
                    <td className="time">7.45pm</td>
                    <td className="description">Cutting of the cake followed by first dance</td>
                </tr>
                <tr>
                    <td className="time">8.30pm</td>
                    <td className="description">Evening BBQ and cake to be shared</td>
                </tr>
                <tr>
                    <td className="time">10.15pm</td>
                    <td className="description">Fireworks</td>
                </tr>
            </table>
        </div>
    );
}
