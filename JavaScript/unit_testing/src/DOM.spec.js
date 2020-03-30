describe("DOM", function(){

    beforeAll(function(){
        document.querySelector("#searchbox").value="hello";
    });

    it("SearchButton",async function(){
        spyOn(window,"getVideos");
        spyOn(window,"populateView");
        await onSearchButtonClick();
        expect(window.getVideos).toHaveBeenCalled();
        expect(window.populateView).toHaveBeenCalled();
    });

    it("nextPage",function(){
        let tempIndex=pageIndex;
        spyOn(window,"populateView");
        nextPage();
        expect(tempIndex+1).toEqual(pageIndex);
        expect(window.populateView).toHaveBeenCalled();
    });

    it("previous page", function(){
        let tempIndex=pageIndex;
        spyOn(window,"populateView");
        previousPage();
        expect(tempIndex-1).toEqual(pageIndex);
        expect(window.populateView).toHaveBeenCalled();
    });

    it("getVideos", async function(){
        let oldItems= items.length;
        await getVideos(url+"hello");
        expect(oldItems+15).toEqual(items.length);
    });
    it("clear view", function(){
        nextPage();
        clearView();
        expect(document.querySelector(".card")).toBeFalsy();
    });
    it("populateView",function(){
        spyOn(window,"clearView");
        spyOn(window,"getVideos");
        populateView(3);
        expect(window.clearView).toHaveBeenCalled();
        expect(window.getVideos).toHaveBeenCalled();
    });   
});