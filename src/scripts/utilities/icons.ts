import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCaretDown,
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export function loadIcons(): void {
    library.add(
        faCaretDown,
        faSpinner,
    );
}
