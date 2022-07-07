using UnityEngine;

/// <summary>
/// The nodes' attributes
/// </summary>

public class cube : MonoBehaviour
{
    public string id;
    public int group;

    void OnMouseEnter()
    {
        if (! Input.GetMouseButton(0))
        {
            Debug.Log(this.id);
        }
    }

    public void setColor(Color color)
    {
        Renderer rend = GetComponent<Renderer>();
        rend.material.SetColor("_Color", color); 
    }
}
