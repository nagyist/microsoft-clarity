import { getNodeFromHash } from "@src/layout/dom";
import { text } from "@src/interaction/click";

export function getTextFromHash(hash: string): string {
    let node = getNodeFromHash(hash);
    return text(node);
}