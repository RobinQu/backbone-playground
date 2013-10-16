if(this.content.length > 140) {
    error("content", "the content length should be less than 140!");
}
if(!this.ctime) {
    this.ctime = Date.now();
}
