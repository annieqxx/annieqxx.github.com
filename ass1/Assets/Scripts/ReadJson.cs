using System;
using System.Collections.Generic;
using UnityEngine;
using System.IO;

/// <summary>
/// controller for reading Json file
/// </summary>

[Serializable]
public class ReadJson : MonoBehaviour
{
    public string path;
    public string jsonString;
    public lesmis3D test; 
    
    void Awake() {
        this.path = Application.streamingAssetsPath + "/lesmis-3d.json";

        if (File.Exists(path))
        {
            this.jsonString = File.ReadAllText(path);
            test = JsonUtility.FromJson<lesmis3D>(this.jsonString);
         
        }
       
    }
}


[Serializable]
public class lesmis3D
{
    public List<nodes> nodes;
    public List<links> links;
}

[Serializable]
public class nodes
{
    public string id;
    public int group;
    public string color;
    public float x;
    public float y;
    public float z;
}

[Serializable]
public class links
{
    public int source;
    public int target;
    public int value;
}


