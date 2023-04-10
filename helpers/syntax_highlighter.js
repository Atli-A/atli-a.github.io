// I don't care if you steal this syntax highlighter
// but I would encourage you not to because it is 
// terribly written

export function highlight(text, rules) {
    let split = [text];
    for (const rule of rules) {
        const pattern = rule.pattern;
        const color = rule.color;
        // for each in matchall
        split = split.map(item => {
            if (typeof item === "string") {
                let new_splits = [];
                let last = 0;
                const matches = item.matchAll(pattern);
                for (const match of matches) {
                    const start = match.index;
                    const end = start + match[0].length;
                    new_splits.push(item.substring(last, start));
                    new_splits.push({
                        color: color,
                        str: match[0]
                    });
                    last = end;
                }
                new_splits.push(item.substring(last, item.length));
                return new_splits;
            }
            return item;
        }).flat()
    }

    return split.reduce(
        (accumulator, cur) => {
            if (typeof cur === "string") {
                return accumulator + cur;
            }
            return accumulator + `<span style='color:${cur.color}'>${cur.str}</span>`
        }, "");
}


const yellow = "#ffffbb"
const comment = "#bbffff"
const blue = "#bbffff"
const green = "#bbffbb"
const purple = "#ff66ff"

const vchar = "A-Za-z0-9_"
export const austral_rules = [
    {
        pattern: "--.*(\n|$)",
        color: comment
    },
    {
        pattern: `( |\n|^)+(generic|let|if|end if|then|and|not|instance)`,
        color: yellow
    },
    { 
        pattern: `( |\n|^)+(typeclass|method|function|body|module|end|union|record|import|is|has)`,
        color: blue
    },
    {
        pattern: `(?<=[^${vchar}])[A-Z][${vchar}]*`,
        color: green
    },
    {
        pattern: `(".*"|(?<=[^${vchar}])[0-9])`,
        color: purple
    }
];
