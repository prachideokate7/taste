import React from "react";
import f7 from "./images/f7.png";
import './About.css'

function About() {
    return (
        <container>
            <div id="about-anchor">
                <img src={f7} alt="" width="100%" height="600rem" className="aboutimg" />
                <p className="aboutName">About Us</p>
                <p className="aboutpara">lorem ipsum e:21364) UnhandledPromiseRejectionWarning: Error: Failed to
                load jshint library. Please install jshint in your workspace folder using 'npm ins
                tall jshint' or globally using 'npm install -g jshint' and then reload.
                at Linter.(c:\Users\91992\.vscode\extensions\dbaeumer.jshint-0.11.0\jshint-server\out\server.js:336:23)
                at Generator.throw
                at rejected (c:\Users\91992\.vscode\extensions\dbaeumer.jshint-0.11.0\jshint-server\out\server.js:9:65)
                at runMicrotasks
                at processTicksAndRejections (internal/process/task_queues.js:97:5)
(node:21364) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This </p>
            </div>

        </container>

    );
}

export default About;