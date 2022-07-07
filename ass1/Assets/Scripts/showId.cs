using UnityEngine;

/// <summary>
/// creates the ID text on Canvas 
/// </summary>

public class showId : MonoBehaviour
{
    public GameObject InfoBox_prefab;
    
    private Canvas canvas;

    private GameObject box;
    
    void Awake()
    {
        canvas = GameObject.Find("Canvas").GetComponent<Canvas>();
        
    }

    public void createInfoBox()
    {
        box = (GameObject)Instantiate(this.InfoBox_prefab);
        box.transform.SetParent(this.canvas.gameObject.transform, false);
        this.box.transform.position = this.gameObject.transform.position;
        box.GetComponent<infoBox>().Id.text = "Id: " + this.gameObject.GetComponent<cube>().id;
    }

    void OnMouseEnter()
    {
        if (!Input.GetMouseButton(0))
        {
            createInfoBox();
        }
    }

    void OnMouseExit()
    {
        Destroy(box);
    }
}
