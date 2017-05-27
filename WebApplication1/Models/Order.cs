using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Order
    {
        [Required(ErrorMessage = "Please enter a Serial Number")]
        [MaxLength(7, ErrorMessage = "Please enter a 7 digit Serial Number")]
        [MinLength(7, ErrorMessage = "Please enter a 7 digit Serial Number")]
        public string SerialNumber_ID { get; set; }

        public string CustomerID { get; set; }
        public string DisplayID { get; set; }
        public DateTime OrderDate { get; set; }
        public string OrderNumber { get; set; }
        public string SiteName { get; set; }
        public string Description { get; set; }
        public string TypeURL { get; set; } 
    }
}