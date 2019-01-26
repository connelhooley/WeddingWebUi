import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faVimeoV,
} from "@fortawesome/free-brands-svg-icons";
import {
    faArrowRight,
    faBars,
    faCheckCircle,
    faExternalLinkAlt,
    faSpinner,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

export function loadIcons(): void {
    library.add(
        faArrowRight,
        faBars,
        faCheckCircle,
        faExternalLinkAlt,
        faSpinner,
        faUser,
        faVimeoV,
    );
}
