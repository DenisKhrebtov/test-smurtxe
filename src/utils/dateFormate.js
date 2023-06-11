const formatDate = (timestamp) => {
  const completedDate = new Date(timestamp);
  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - completedDate.getTime();

  const oneDay = 24 * 60 * 60 * 1000;

  if (timeDiff < oneDay) return "Today";
  if (timeDiff < oneDay * 2) return "Yesterday";
  if (timeDiff < oneDay * 7) return "Few days ago";
  if (timeDiff >= oneDay * 7) return "A week ago";

  return "A long time ago";
};

export default formatDate;
