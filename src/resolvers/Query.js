function info() {
    return `This is the API of a Hackernews Clone`;
}

function feed(root, args, context, info) {
    return context.prisma.links();
}

module.exports = {
    feed,
    info,
};
