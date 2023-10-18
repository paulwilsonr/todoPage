function formatDate(date: string, inTaskCard: boolean) {
  let newDate = new Date(date.replace(/-/g, '/')).toDateString();
  newDate = newDate.slice(0, 3) + ',' + newDate.slice(3, newDate.length);
  inTaskCard
    ? (newDate = newDate.slice(0, 11))
    : (newDate =
        newDate.slice(0, 11) + ',' + newDate.slice(11, newDate.length));
  return newDate;
}

export default formatDate;
