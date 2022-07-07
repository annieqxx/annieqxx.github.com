using UnityEngine;

/// <summary>
/// rotating nodes
/// </summary>

public class rotation : MonoBehaviour
{
    public float rotationSpeed = 20;

    void OnMouseDrag()
    {
        float rotX = Input.GetAxis("Mouse X") * rotationSpeed * Mathf.Deg2Rad;
        float rotY = Input.GetAxis("Mouse Y") * rotationSpeed * Mathf.Deg2Rad;

        this.transform.parent.gameObject.transform.RotateAround(Vector3.up, -rotX);
        this.transform.parent.gameObject.transform.RotateAround(Vector3.right, rotY);
       
    }
}
