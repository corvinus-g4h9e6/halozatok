using HajosTeszt.TanuloModels;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace HajosTeszt.Controllers
{
    [Route("api/tanulok")]
    [ApiController]
    public class TanuloController : ControllerBase
    {
        // GET: api/tanulok
        [HttpGet]
        public IEnumerable<Tanuloadat> Get()
        {
           TanuloContext context = new TanuloContext();

           return context.Tanuloadats.ToList();
            
        }

        // GET api/tanulok/5
        [HttpGet("{id}")]
        public Tanuloadat Get(int id)
        {
            TanuloContext context = new TanuloContext();
            var keresettTanulo = (from x in context.Tanuloadats
                                  where x.TanuloSk == id
                                  select x).FirstOrDefault();
            return keresettTanulo;
        }

        // POST api/tanulok
        [HttpPost]
        public void Post([FromBody] Tanuloadat UjTanulo)
        {
            TanuloContext context = new TanuloContext();
            context.Tanuloadats.Add(UjTanulo);
            context.SaveChanges();
        }

        // PUT api/<TanuloController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/tanulok/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            TanuloContext context = new TanuloContext();
            var torlendoTanulo = (from x in context.Tanuloadats
                                  where x.TanuloSk == id
                                  select x).FirstOrDefault();
            
                context.Remove(torlendoTanulo);
                context.SaveChanges();
            
        }


        [HttpGet]
        [Route("count")]
        public int TanulokSzama()
        {
            TanuloContext context = new TanuloContext();
            int tanuloszam = context.Tanuloadats.Count();

            return tanuloszam;
        }

    }
}
