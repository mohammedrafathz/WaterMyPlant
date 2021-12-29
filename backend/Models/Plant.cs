using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace backend.Models
{
    public class Plant
    {
        public int Id { get; set; }
        public bool status { get; set; }
        public string plantName { get; set; }
        public string image { get; set; }
        public string lastWateredAt { get; set; }
    }
}