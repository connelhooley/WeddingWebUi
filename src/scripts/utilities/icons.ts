import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faSpinner,
} from "@fortawesome/free-solid-svg-icons";

export function loadIcons(): void {
    library.add(
        faSpinner,
    );
}
