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

import System.IO;

public static class AutoBuilder {
	
	/**
	 * Gets the Project name by looking up the directory name of the project
	 * @return {String} Root directory name of the project
	 */
	function GetProjectName () {
		var s : String[] = Application.dataPath.Split('/'[0]);
		return s[s.Length - 2];
	}
	
	/**
	 * Gets the paths of the activated scenes from the BuildSettings
	 * @return {String[]} C# BuiltinArray of Strings
	 */
	function GetScenePaths () {
		var scenes = new Array();
		
		for(var i : int = 0; i < EditorBuildSettings.scenes.Length; i += 1) {
			
			/**
			 * Only add scene, if it is enabled in the build settings.
			 */
			if (EditorBuildSettings.scenes[i].enabled) {
				scenes.Push(EditorBuildSettings.scenes[i].path);
			}
		}
		
		/**
		 * Return a builtin array instead of a JavaScript Array
		 */
		var builtinArray : String[] = scenes.ToBuiltin(String) as String[];
		return builtinArray;
	}

	/**
	 * Prepares the output directory and adds the Build to the BuildPipeline
	 * @param {Srtring[]} scenes      Builtin array of Strings with the scenes to build
	 * @param {String} outputFile        Output file or directory for the Player binary
	 * @param {BuildTarget} buildTarget   BuildTarget Enumeration
	 * @param {BuildOptions} buildOptions BuildOptions Enumeration
	 */
	function ExecuteBuild (scenes : String[], outputFile : String, buildTarget : BuildTarget, buildOptions: BuildOptions) {

		/**
		 * Get path from outputFile and create the path, if it does not exist.
		 * Necessary for the first Build of a Project
		 */
		var path : String = Path.GetDirectoryName(outputFile);
		Directory.CreateDirectory(path);

		BuildPipeline.BuildPlayer(scenes, outputFile, buildTarget, buildOptions);
	}


	@MenuItem('File/AutoBuilder/Windows/32-bit')
	function PerformWinBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Win/' + GetProjectName() + '.exe',BuildTarget.StandaloneWindows,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Windows/64-bit')
	function PerformWin64Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Win64/' + GetProjectName() + '.exe',BuildTarget.StandaloneWindows64,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Mac OSX/Universal')
	function PerformOSXUniversalBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/OSX-Universal/' + GetProjectName() + '.app',BuildTarget.StandaloneOSXUniversal,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Mac OSX/Intel')
	function PerformOSXIntelBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/OSX-Intel/' + GetProjectName() + '.app',BuildTarget.StandaloneOSXIntel,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Mac OSX/Intel 64')
	function PerformOSXIntel64Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/OSX-Intel64/' + GetProjectName() + '.app',BuildTarget.StandaloneOSXIntel64,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/iOS')
	function PerformiOSBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/iOS',BuildTarget.iOS,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Android')
	function PerformAndroidBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Android',BuildTarget.Android,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Web/WebGL')
	function PerformWebGLBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/WebGL',BuildTarget.WebGL,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Web/Standard')
	function PerformWebBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Web',BuildTarget.WebPlayer,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Web/Streamed')
	function PerformWebStreamedBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Web-Streamed',BuildTarget.WebPlayerStreamed,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Playstation/PSP2')
	function PerformPSP2Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Playstation/PSP2',BuildTarget.PSP2,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Playstation/PS3')
	function PerformPS3Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Playstation/PS3',BuildTarget.PS3,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Playstation/PS4')
	function PerformPS4Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Playstation/PS4',BuildTarget.PS4,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Xbox/Xbox 360')
	function PerformXbox360Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Xbox/Xbox-360',BuildTarget.XBOX360,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Xbox/Xbox One')
	function PerformXboxOneBuild ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Xbox/Xbox-One',BuildTarget.XboxOne,BuildOptions.None);
	}
	
	@MenuItem('File/AutoBuilder/Windows Phone 8')
	function PerformWP8Build ()
	{
		ExecuteBuild(GetScenePaths(), 'Builds/Windows-Phone',BuildTarget.WP8Player,BuildOptions.None);
	}
}