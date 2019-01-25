import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRight,
    faCheckCircle,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

export function loadIcons(): void {
    library.add(
        faArrowRight,
        faCheckCircle,
        faSpinner,
        faUser,
        faVimeoV,
    );
}
