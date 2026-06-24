import "./index.scss"
import { RightComponent } from "./RightComponent"

export const HomeScreen = () => {
    return (<div className="home-container">
        <div className="left-container">
        <div className="items-container">
        <img src="logo.png"/>
        <h1>Accijob</h1>
        <h2>Code.Compile.Debug</h2>
        <button>
            <span class="material-icons">
add
</span>
            <span>Create Playground</span></button>
        </div>
        </div>
        <RightComponent/>
        </div>
        
);
}