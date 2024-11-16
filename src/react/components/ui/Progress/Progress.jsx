import { Spinner } from "@telegram-apps/telegram-ui"
import '@telegram-apps/telegram-ui/dist/styles.css';
import "./Progress.css"


export function Progress() {
    return (
        <div className="progress_container">
            <Spinner className="progress" size="l"/>
        </div>
    )
}
