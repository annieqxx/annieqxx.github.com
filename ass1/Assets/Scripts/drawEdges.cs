using UnityEngine;

/// <summary>
/// draw the edges using Linerenderer
/// </summary>

public class drawEdges : MonoBehaviour
{
    private ReadJson readJson;
    public LineRenderer linerenderer;

    void Start()
    {
        this.readJson = this.GetComponent<ReadJson>();
        this.linerenderer.positionCount = readJson.test.links.Count * 2;
    }

    // Update is called once per frame
    void Update()
    {
        _drawEdges();
    }

    private void _drawEdges()
    {
        for (int i = 0; i < readJson.test.links.Count; i += 2)
        {
            int sourceIndex = readJson.test.links[i].source;
            int targetIndex = readJson.test.links[i].target;

            this.linerenderer.SetPosition(i, GameObject.Find("Nodes").gameObject.transform.GetChild(sourceIndex).transform.position); // the "Nodes" object's child's position
            this.linerenderer.SetPosition(i + 1, GameObject.Find("Nodes").gameObject.transform.GetChild(targetIndex).transform.position);
        }
    }
}
