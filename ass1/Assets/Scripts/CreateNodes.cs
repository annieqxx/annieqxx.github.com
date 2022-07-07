using UnityEngine;

/// <summary>
/// generates the nodes based on the given Json file
/// </summary>

public class CreateNodes : MonoBehaviour
{
    public GameObject prefab;
    private ReadJson readJson;
    
    // Start is called before the first frame update
    void Start()
    {
        this.readJson = this.GetComponent<ReadJson>();
        instantiateNodes();
    }
  
    private void instantiateNodes()
    {
        // read from Json file and generates the nodes
        for (int i = 0; i < readJson.test.nodes.Count; i++)
        {
            var position = new Vector3(
                readJson.test.nodes[i].x,
                readJson.test.nodes[i].y,
                readJson.test.nodes[i].z);

            GameObject node = Instantiate(this.prefab, position, Quaternion.identity);
            node.transform.parent = GameObject.Find("Nodes").transform;
            node.GetComponent<cube>().id = readJson.test.nodes[i].id;
            node.GetComponent<cube>().group = readJson.test.nodes[i].group;

            // html color code to hex
            Color newCol;

            if (ColorUtility.TryParseHtmlString(readJson.test.nodes[i].color, out newCol))
            {
                node.GetComponent<cube>().setColor(newCol);
            }

        }
    }
    
}
