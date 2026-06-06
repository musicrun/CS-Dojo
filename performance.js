export function shouldRenderRail(previous, next) {
  return previous.currentId !== next.currentId || previous.filter !== next.filter;
}

export function changedAnswerState(previousAnswer, nextAnswer) {
  return Boolean(previousAnswer?.trim()) !== Boolean(nextAnswer?.trim());
}
