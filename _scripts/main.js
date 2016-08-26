function slickInit(e){$(e).slick({lazyLoad:"ondemand",slidesToShow:1,slidesToScroll:1,dots:!0,centerMode:!0,focusOnSelect:!0,fade:!0})}function slideMaker(e,t,a){return'<div><img data-lazy="_img/screenshots/'+e+"/"+t+'.png" alt="'+a+'" /><p>'+a+"</p></div>"}function updateScreenshots(e){for(var t="",a=siteData.screenshots,s=siteData.os[e].name,i="",l="",n="",o=0;o<a.length;o++)i=a[o].image,l=a[o].text+" ("+s+")",n=slideMaker(e,i,l),t=t+"\n"+n;if(siteData.os[e].legacy)for(var r=siteData.os[e].legacy,d=0;d<r.length;d++)i=r[d].image,l=r[d].name,n=slideMaker(e,i,l),t=t+"\n"+n;var c="#screenshots .slick";$(c).html(t).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(c)}function updateCultures(e){for(var t=siteData.cultures,a=siteData.os[e].name,s="",i="",l="",n="",o=0;o<t.length;o++)i=t[o].image,l=t[o].language+" ("+a+")",n=slideMaker(e,i,l),s=s+"\n"+n;var r="#cultures .slick";$(r).html(s).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(r)}function updateThemes(e){for(var t=siteData.themes,a=siteData.os[e].name,s="",i="",l="",n="",o=0;o<t.length;o++)i=t[o].image,l=t[o].theme+" ("+a+")",n=slideMaker(e,i,l),s=s+"\n"+n;var r="#themes .slick";$(r).html(s).removeClass("slick-initialized slick-slider slick-dotted"),slickInit(r)}var latestRelease="https://api.github.com/repos/scout-app/scout-app/releases";$.get(latestRelease,function(e){for(var t=0;t<e.length;t++){var a=e[t],s=a.assets,i=s.length;if(i>3){for(var l,n,o,r,d=0;d<i;d++){var c=s[d],m=c.browser_download_url,u=c.browser_download_url.toLowerCase();/lin32/gi.test(u)?l=m:/lin64/gi.test(u)?n=m:/osx/gi.test(u)?o=m:/win/gi.test(u)&&(r=m)}var h=a.tag_name;return h=h.replace("v",""),$("#downloads .lin32").attr("href",l),$("#downloads .lin64").attr("href",n),$("#downloads .osxupdate").attr("href",o),$("#downloads .windowsupdate").attr("href",r),$("#downloads .lin32").removeAttr("target").attr("download",""),$("#downloads .lin64").removeAttr("target").attr("download",""),$("#downloads .osxupdate").removeAttr("target").attr("download",""),$("#downloads .windowsupdate").removeAttr("target").attr("download",""),void $(".currentVersion").replaceWith(h)}}}),$(".showmore").click(function(){$(".limited").slideUp("slow"),$(".complete").slideDown("slow")}),$(".showless").click(function(){$(".complete").slideUp(),$(".limited").slideDown()}),$(".showless").click(),$("#minreqs th").click(function(){$("#minreqs th").removeClass("selected"),$(this).addClass("selected");var e=$(this).data("os");$("#minreqs td div").hide(),$("#minreqs ."+e).show()}),$("#translation_instructions").hide(),$(".showtranslations").click(function(){$("#translation_instructions").slideToggle()}),$(".translate-link").click(function(){$("#translation_instructions").slideDown()}),window.siteData={os:{win:{name:"Windows 7",legacy:[{name:"XP",image:"xp"},{name:"Windows 10",image:"win10"}]},ubuntu:{name:"Ubuntu",legacy:[{name:"Ubuntu 12 LTS",image:"ubuntu12"}]},zorin:{name:"Zorin",legacy:[{name:"Debian",image:"debian"}]},osx:{name:"OSX"}},cultures:[{language:"English",code:"en",image:"02"},{language:"Dutch",code:"nl",image:"03"},{language:"French",code:"fr",image:"04"},{language:"Russian",code:"ru",image:"05"}],themes:[{theme:"Simplex",image:"02"},{theme:"Cerulean",image:"06"},{theme:"Classic",image:"07"},{theme:"Cosmo",image:"08"},{theme:"Cyborg",image:"09"},{theme:"Darkly",image:"10"},{theme:"Flatly",image:"11"},{theme:"Journal",image:"12"},{theme:"Lumen",image:"13"},{theme:"Paper",image:"14"},{theme:"Readable",image:"15"},{theme:"Sandstone",image:"16"},{theme:"Slate",image:"17"},{theme:"Spacelab",image:"18"},{theme:"Superhero",image:"19"},{theme:"United",image:"20"},{theme:"Yeti",image:"21"}],screenshots:[{text:"First Time User Experience",image:"01"},{text:"Project view",image:"02"},{text:"Status of All Projects",image:"22"},{text:"Dev Tools are always accessible",image:"23"}]},$("#screenshots img").click(function(){var e=$(this).data("os");updateScreenshots(e)}),$("#cultures img").click(function(){var e=$(this).data("os");updateCultures(e)}),$("#themes img").click(function(){var e=$(this).data("os");updateThemes(e)});var currentOs,linuxType;$("html").hasClass("win")?(currentOs="win",$("#downloads .windowsupdate").addClass("selected")):$("html").hasClass("mac")?(currentOs="osx",$("#downloads .osxupdate").addClass("selected")):$("html").hasClass("linux")&&(currentOs="ubuntu",$("html").hasClass("arch32")?(linuxType="lin32",$("#downloads .lin32").addClass("selected")):$("html").hasClass("arch64")&&(linuxType="lin64",$("#downloads .lin64").addClass("selected"))),$("#screenshots ."+currentOs).click(),$("#cultures ."+currentOs).click(),$("#themes ."+currentOs).click(),$("#minreqs [data-os='"+currentOs+"']").click();
