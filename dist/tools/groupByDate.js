const groupMessagesByDay = (messages) => {
    const groups = new Map();
    messages.forEach(msg => {
        const date = msg.createdAt.toISOString().split('T')[0]; // "2025-03-15"
        if (!groups.has(date)) {
            groups.set(date, []);
        }
        groups.get(date).push(msg);
    });
    // Convert map to array of objects (optional)
    return Array.from(groups.entries()).map(([date, messages]) => ({
        date,
        messages,
        count: messages.length
    }));
};
export default groupMessagesByDay;
// .sort((a, b) => new Date(b.date) - new Date(a.date))
//# sourceMappingURL=groupByDate.js.map