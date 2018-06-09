var youtube = /** @class */ (function () {
    function youtube(videoTitle, videoDescription, videoDuration, videoPublisher, videoViews, videoLikes, videoDislikes, videoShare, catagory) {
        var _this = this;
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoDuration = videoDuration;
        this.videoPublisher = videoPublisher;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoShare = videoShare;
        this.catagory = catagory;
        this.video_Title = function () {
            console.log("Video Tile:" + _this.videoTitle);
        };
        this.video_Description = function () {
            console.log("about video:" + _this.videoDescription);
        };
        this.video_Duration = function () {
            console.log("Duration:" + _this.videoDuration);
        };
        this.video_Publisher = function () {
            console.log("Publisher:" + _this.videoPublisher);
        };
        this.video_Views = function () {
            console.log("Number of views:" + _this.videoViews);
        };
        this.video_Likes = function () {
            console.log("Likes:" + _this.videoLikes);
        };
        this.video_Dislikes = function () {
            console.log("Dislikes:" + _this.videoDislikes);
        };
        this.video_Share = function () {
            console.log("Number of shares:" + _this.videoShare);
        };
        this.catagorys = function () {
            console.log("catagory:" + _this.catagory);
        };
        this.videoTitle = videoTitle;
        this.videoDescription = videoDescription;
        this.videoDuration = videoDuration;
        this.videoPublisher = videoPublisher;
        this.videoViews = videoViews;
        this.videoLikes = videoLikes;
        this.videoDislikes = videoDislikes;
        this.videoShare = videoShare;
        this.catagory = catagory;
    }
    return youtube;
}());
var video1 = new youtube("jackie", "a funn love video song", "20minute", "indian", 20000, 2234, 7, 15, "animation");
video1.video_Title();
video1.video_Description();
video1.video_Duration();
video1.video_Publisher();
video1.video_Views();
video1.video_Likes();
video1.video_Dislikes();
video1.video_Share();
video1.catagorys();
