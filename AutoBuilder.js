/* 
AutoBuilder.js
Automatically creates a build for a specific target platform.
Inspired by AutoBuilder.cs by Thinksquirrel Software, LLC (http://wiki.unity3d.com/index.php?title=AutoBuilder)
 
Installation
Place in an Editor folder.
 
Usage
Go to File > AutoBuilder and select a platform. These methods can also be run from the Unity command line using -executeMethod AutoBuilder.MethodName.
 
Copyright (c) 2015 Geil,Danke! GmbH, Berlin
Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal 
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is 
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in 
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE 
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, 
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN 
THE SOFTWARE.

*/

#pragma strict

public static class AutoBuilder {
	
	function GetProjectName () {
		var s : String[] = Application.dataPath.Split('/'[0]);
		return s[s.Length - 2];
	}
	
	function GetScenePaths () {
		var scenes = new String[EditorBuildSettings.scenes.Length];
		
		for(var i : int = 0; i < EditorBuildSettings.scenes.Length; i += 1)
		{
			scenes[i] = EditorBuildSettings.scenes[i].path;
		}
		
		return scenes;
	}
	
	@MenuItem('File/AutoBuilder/Windows/32-bit')
	function PerformWinBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Win/' + GetProjectName() + '.exe',BuildTarget.StandaloneWindows,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Windows/64-bit')
	function PerformWin64Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Win64/' + GetProjectName() + '.exe',BuildTarget.StandaloneWindows64,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Mac OSX/Universal')
	function PerformOSXUniversalBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/OSX-Universal/' + GetProjectName() + '.app',BuildTarget.StandaloneOSXUniversal,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Mac OSX/Intel')
	function PerformOSXIntelBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/OSX-Intel/' + GetProjectName() + '.app',BuildTarget.StandaloneOSXIntel,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Mac OSX/Intel 64')
	function PerformOSXIntel64Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/OSX-Intel64/' + GetProjectName() + '.app',BuildTarget.StandaloneOSXIntel64,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/iOS')
	function PerformiOSBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/iOS',BuildTarget.iOS,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Android')
	function PerformAndroidBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Android',BuildTarget.Android,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Web/WebGL')
	function PerformWebGLBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/WebGL',BuildTarget.WebGL,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Web/Standard')
	function PerformWebBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Web',BuildTarget.WebPlayer,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Web/Streamed')
	function PerformWebStreamedBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Web-Streamed',BuildTarget.WebPlayerStreamed,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Playstation/PSP2')
	function PerformPSP2Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Playstation/PSP2',BuildTarget.PSP2,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Playstation/PS3')
	function PerformPS3Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Playstation/PS3',BuildTarget.PS3,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Playstation/PS4')
	function PerformPS4Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Playstation/PS4',BuildTarget.PS4,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Xbox/Xbox 360')
	function PerformXbox360Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Xbox/Xbox-360',BuildTarget.XBOX360,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Xbox/Xbox One')
	function PerformXboxOneBuild ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Xbox/Xbox-One',BuildTarget.XboxOne,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Windows Phone 8')
	function PerformWP8Build ()
	{
		BuildPipeline.BuildPlayer(GetScenePaths(), 'Builds/Windows-Phone',BuildTarget.WP8Player,BuildOptions.None);
	}
}