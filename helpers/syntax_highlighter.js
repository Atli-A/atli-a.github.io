export function highlight(rules, text) {
  rules.forEach((rule) => {});
  split = [text];
  for (let i = 0; i < rules.length; i++) {
    pattern = rules[i].pattern;
    color = rules[i].color;
    // for each in matchall
    const matches = t.matchAll(pattern);
    next_splits = [];
    matches.forEach((match) => {
      str = match[0];
      start = match.index;
      end = match.lastIndex;
      next_splits.push(t.substr);
    });
    splits = next_splits;
  }
}
